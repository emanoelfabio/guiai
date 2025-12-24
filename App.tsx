
import React, { useState, useMemo, useEffect, useRef, lazy, Suspense } from 'react';
import { CATEGORIES } from './data';
import { Category, ViewState, AITool, ToolNotification } from './types';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import ToolCard from './components/ToolCard';
import BottomNav from './components/BottomNav';
import InstallPrompt from './components/InstallPrompt';
import AuthModal from './components/AuthModal';
import { useAuth } from './hooks/useAuth';
import { useSync } from './hooks/useSync';

// Lazy load componentes menos críticos
const WelcomeScreen = lazy(() => import('./components/WelcomeScreen'));
const NotificationList = lazy(() => import('./components/NotificationList'));
const FeedbackChat = lazy(() => import('./components/FeedbackChat'));

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(() => {
    const hasSeenWelcome = localStorage.getItem('ai_tools_welcome_seen');
    return hasSeenWelcome ? 'categories' : 'welcome';
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('ai_tools_theme') === 'dark';
  });

  const [previousView, setPreviousView] = useState<ViewState>('categories');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const mainRef = useRef<HTMLElement>(null);

  const [favorites, setFavorites] = useState<AITool[]>(() => {
    const saved = localStorage.getItem('ai_tools_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [followedCategories, setFollowedCategories] = useState<string[]>(() => {
    const saved = localStorage.getItem('ai_tools_followed');
    return saved ? JSON.parse(saved) : [];
  });

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Authentication State
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, loading: authLoading, signOut } = useAuth();
  const { syncFavoritesToCloud, syncFollowedCategoriesToCloud, loadFromCloud, isSyncing } = useSync(user?.id, isOnline);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView, selectedCategory]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ai_tools_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ai_tools_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('ai_tools_favorites', JSON.stringify(favorites));
    // Sincronizar favoritos quando online e autenticado
    if (user && isOnline) {
      syncFavoritesToCloud(favorites).catch(console.error);
    }
  }, [favorites, user, isOnline]);

  useEffect(() => {
    localStorage.setItem('ai_tools_followed', JSON.stringify(followedCategories));
    // Sincronizar categorias quando online e autenticado
    if (user && isOnline) {
      syncFollowedCategoriesToCloud(followedCategories).catch(console.error);
    }
  }, [followedCategories, user, isOnline]);

  // Carregar dados da nuvem ao fazer login
  useEffect(() => {
    if (user && isOnline) {
      loadFromCloud().then(cloudData => {
        // Mesclar dados locais com dados da nuvem
        const mergedFavorites = [...new Map(
          [...favorites, ...cloudData.favorites].map(item => [item.name, item])
        ).values()];
        const mergedCategories = [...new Set([...followedCategories, ...cloudData.followedCategories])];

        setFavorites(mergedFavorites);
        setFollowedCategories(mergedCategories);
      }).catch(console.error);
    }
  }, [user]);

  // PWA Install Prompt Detection
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Mostrar prompt após 3 segundos se não foi dispensado antes
      const hasSeenPrompt = localStorage.getItem('ai_tools_install_prompt_seen');
      if (!hasSeenPrompt) {
        setTimeout(() => setShowInstallPrompt(true), 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Online/Offline Detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const toolNotifications = useMemo<ToolNotification[]>(() => {
    const notifications: ToolNotification[] = [];
    CATEGORIES.forEach(cat => {
      cat.tools.forEach(tool => {
        const isFollowed = followedCategories.includes(cat.id);
        if (tool.isFeatured) {
          notifications.push({
            id: `feat_${tool.name}_${cat.id}`,
            toolName: tool.name,
            categoryName: cat.title,
            type: 'featured',
            date: 'Hoje'
          });
        }
        else if (tool.isNew && isFollowed) {
          notifications.push({
            id: `new_${tool.name}_${cat.id}`,
            toolName: tool.name,
            categoryName: cat.title,
            type: 'new',
            date: 'Recentemente'
          });
        }
      });
    });
    return Array.from(new Map(notifications.map(n => [n.id, n])).values()).slice(0, 5);
  }, [followedCategories]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleStart = () => {
    localStorage.setItem('ai_tools_welcome_seen', 'true');
    setCurrentView('categories');
  };

  const handleCategoryClick = (cat: Category) => {
    setPreviousView(currentView);
    setSelectedCategory(cat);
    setActiveFilters([]);
    setCurrentView('tools');
  };

  const toggleFollowCategory = (e: React.MouseEvent, catId: string) => {
    e.stopPropagation();
    setFollowedCategories(prev =>
      prev.includes(catId)
        ? prev.filter(id => id !== catId)
        : [...prev, catId]
    );
  };

  const toggleFilter = (subcategory: string) => {
    setActiveFilters(prev =>
      prev.includes(subcategory)
        ? prev.filter(f => f !== subcategory)
        : [...prev, subcategory]
    );
  };

  const handleBack = () => {
    setCurrentView(previousView);
    setSelectedCategory(null);
    setActiveFilters([]);
    if (previousView === 'tools' || previousView === 'notifications' || previousView === 'feedback') {
      setPreviousView('categories');
    }
  };

  const toggleFavorite = (tool: AITool) => {
    setFavorites(prev => {
      const isFav = prev.some(f => f.name === tool.name);
      if (isFav) {
        return prev.filter(f => f.name !== tool.name);
      } else {
        return [...prev, tool];
      }
    });
  };

  const handleInstallApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('PWA instalado com sucesso');
    }

    setDeferredPrompt(null);
    setShowInstallPrompt(false);
    localStorage.setItem('ai_tools_install_prompt_seen', 'true');
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('ai_tools_install_prompt_seen', 'true');
  };

  const filteredTools = useMemo(() => {
    if (!selectedCategory) return [];
    if (activeFilters.length === 0) return selectedCategory.tools;
    return selectedCategory.tools.filter(tool => activeFilters.includes(tool.subcategory));
  }, [selectedCategory, activeFilters]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const queryTerms = searchQuery.toLowerCase().split(' ').filter(t => t.length > 0);
    const results: AITool[] = [];

    CATEGORIES.forEach(category => {
      category.tools.forEach(tool => {
        const toolText = `${tool.name} ${tool.description} ${category.title} ${tool.subcategory}`.toLowerCase();
        const matchesAll = queryTerms.every(term => toolText.includes(term));
        if (matchesAll) results.push(tool);
      });
    });
    return Array.from(new Map(results.map(item => [item.name, item])).values());
  }, [searchQuery]);

  const discoveryTools = useMemo(() => {
    return CATEGORIES.flatMap(cat => cat.tools.slice(0, 1)).slice(0, 6);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'welcome':
        return (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div></div>}>
            <WelcomeScreen onStart={handleStart} />
          </Suspense>
        );
      case 'notifications':
        return (
          <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div></div>}>
            <NotificationList toolNotifications={toolNotifications} />
          </Suspense>
        );
      case 'feedback':
        return (
          <Suspense fallback={<div className="flex items-center justify-center py-20"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div></div>}>
            <FeedbackChat />
          </Suspense>
        );
      case 'categories':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="space-y-4 pt-2">
              {CATEGORIES.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  onClick={handleCategoryClick}
                  isFollowing={followedCategories.includes(cat.id)}
                  onToggleFollow={(e) => toggleFollowCategory(e, cat.id)}
                />
              ))}
            </div>

            {/* Footer com direitos reservados */}
            <div className="pt-8 pb-4 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Todos os direitos reservados a <span className="font-semibold text-brand">FsolutionBR</span>
              </p>
            </div>
          </div>
        );
      case 'tools':
        if (!selectedCategory) return null;
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 pb-10">
            <section className="px-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Filtros Principais</h3>
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => setActiveFilters([])}
                    className="text-[10px] font-bold text-brand uppercase tracking-wider underline underline-offset-4"
                  >
                    Limpar Tudo
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveFilters([])}
                  className={`flex flex-col items-center justify-center p-3 rounded-[24px] border transition-all text-center min-h-[68px] shadow-sm relative group ${activeFilters.length === 0
                    ? 'bg-brand border-brand text-white shadow-xl shadow-brand/25 scale-[1.02]'
                    : 'bg-white dark:bg-darkblue-lighter border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-brand/40 hover:bg-gray-50 dark:hover:bg-darkblue'
                    }`}
                >
                  <span className="material-icons-round text-xl mb-0.5 group-hover:scale-110 transition-transform">auto_awesome_mosaic</span>
                  <span className="text-[10px] font-bold uppercase tracking-tight">Ver Todas</span>
                </button>
                {selectedCategory.subcategories.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleFilter(sub.name)}
                    className={`flex flex-col items-center justify-center p-3 rounded-[24px] border transition-all text-center min-h-[68px] shadow-sm relative overflow-hidden group ${activeFilters.includes(sub.name)
                      ? 'bg-brand border-brand text-white shadow-xl shadow-brand/25 scale-[1.02]'
                      : 'bg-white dark:bg-darkblue-lighter border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-brand/40 hover:bg-gray-50 dark:hover:bg-darkblue'
                      }`}
                  >
                    <span className="text-[11px] font-bold leading-tight px-1">{sub.name}</span>
                    {activeFilters.includes(sub.name) ? (
                      <span className="material-icons-round text-base absolute top-1.5 right-2 animate-in zoom-in-50">check_circle</span>
                    ) : (
                      <span className="text-[8px] font-bold opacity-30 absolute top-1.5 right-2.5">#{idx + 1}</span>
                    )}
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[10px] font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
                  {filteredTools.length} Ferramentas Curadas
                </h3>
              </div>
              {filteredTools.length > 0 ? (
                filteredTools.map((tool, idx) => (
                  <ToolCard key={idx} tool={tool} isFavorite={favorites.some(f => f.name === tool.name)} onToggleFavorite={() => toggleFavorite(tool)} />
                ))
              ) : (
                <div className="text-center py-20 opacity-40">
                  <span className="material-icons-round text-6xl mb-4 text-brand">search_off</span>
                  <p className="font-medium text-gray-500">Nenhuma ferramenta para este filtro.</p>
                </div>
              )}
            </section>
          </div>
        );
      case 'search':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="sticky top-[-16px] z-40 -mx-4 px-4 pt-4 pb-5 bg-brand-light dark:bg-darkblue shadow-sm">
              <div className="w-full bg-white dark:bg-darkblue-lighter rounded-2xl p-1 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center px-4 focus-within:ring-2 focus-within:ring-brand transition-all">
                <span className="material-icons-round text-brand mr-2">search</span>
                <input
                  type="text"
                  placeholder="Procure por ChatGPT, Midjourney, Vídeo..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-full py-4 text-[#111827] dark:text-white placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            {searchQuery.trim() === '' ? (
              <div className="space-y-8 pb-10">
                <section>
                  <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-4">Categorias em Destaque</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {CATEGORIES.slice(0, 4).map(cat => (
                      <button key={cat.id} onClick={() => handleCategoryClick(cat)} className="flex items-center gap-3 p-4 bg-white dark:bg-darkblue-lighter rounded-2xl border border-gray-100 dark:border-gray-700 text-left shadow-sm hover:border-brand hover:shadow-md transition-all group">
                        <div className="w-10 h-10 flex-shrink-0 bg-gray-50 dark:bg-darkblue rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                          <img src={cat.icon} className="w-full h-full object-contain" alt="" />
                        </div>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{cat.title}</span>
                      </button>
                    ))}
                  </div>
                </section>
                <section>
                  <h3 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-4">Populares Hoje</h3>
                  <div className="space-y-4">
                    {discoveryTools.map((tool, idx) => (
                      <ToolCard key={idx} tool={tool} isFavorite={favorites.some(f => f.name === tool.name)} onToggleFavorite={() => toggleFavorite(tool)} />
                    ))}
                  </div>
                </section>
              </div>
            ) : (
              <div className="space-y-4">
                {searchResults.length > 0 ? (
                  searchResults.map((tool, idx) => (
                    <ToolCard key={idx} tool={tool} isFavorite={favorites.some(f => f.name === tool.name)} onToggleFavorite={() => toggleFavorite(tool)} highlight={searchQuery} />
                  ))
                ) : (
                  <div className="text-center py-20 opacity-40">
                    <span className="material-icons-round text-6xl mb-4 text-brand">search_off</span>
                    <p className="font-medium text-gray-500">Nenhum resultado para "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      case 'favorites':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            {favorites.length > 0 ? (
              favorites.map((tool, idx) => (
                <ToolCard key={idx} tool={tool} isFavorite={true} onToggleFavorite={() => toggleFavorite(tool)} />
              ))
            ) : (
              <div className="text-center py-20 opacity-40">
                <span className="material-icons-round text-6xl mb-4 text-brand">star_outline</span>
                <p className="font-medium text-gray-500">Sua lista de favoritos está vazia.</p>
              </div>
            )}
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-darkblue-lighter rounded-[32px] p-8 shadow-xl border border-gray-100 dark:border-gray-800 text-center">
              <div className="w-24 h-24 bg-brand/10 dark:bg-brand/20 rounded-full mx-auto flex items-center justify-center mb-4 ring-4 ring-brand/5">
                <span className="material-icons-round text-5xl text-brand">person</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Usuário Visitante</h3>
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => setCurrentView('feedback')}
                  className="w-full flex items-center justify-between p-5 bg-gray-50 dark:bg-darkblue-darker rounded-[20px] border border-gray-100 dark:border-gray-800 hover:border-brand transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-round text-brand group-hover:scale-110 transition-transform">chat_bubble_outline</span>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200">Feedback do Aplicativo</span>
                  </div>
                  <span className="material-icons-round text-gray-300 text-sm">chevron_right</span>
                </button>
                <button
                  onClick={() => {
                    localStorage.removeItem('ai_tools_welcome_seen');
                    setCurrentView('welcome');
                  }}
                  className="w-full flex items-center justify-center p-5 text-red-500 font-bold text-sm uppercase tracking-widest"
                >
                  Encerrar Sessão
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getHeaderInfo = () => {
    if (currentView === 'notifications') return { title: 'Notícias & Alertas', subtitle: `${toolNotifications.length + 2} notificações pendentes`, showBack: true };
    if (currentView === 'feedback') return { title: 'Suporte & Feedback', subtitle: 'Envie sua sugestão', showBack: true };
    if (currentView === 'tools' && selectedCategory) return { title: selectedCategory.title, subtitle: `${filteredTools.length} ferramentas encontradas`, showBack: true };
    if (currentView === 'search') return { title: 'Explorar IAs', subtitle: 'Encontre o que precisa', showBack: false };
    if (currentView === 'favorites') return { title: 'Meus Favoritos', subtitle: 'Acesso rápido', showBack: false };
    if (currentView === 'profile') return { title: 'Meu Perfil', subtitle: 'Configurações', showBack: false };
    return { title: 'GuiAI', subtitle: 'O Diretório Definitivo de IA', showBack: false };
  };

  const headerInfo = getHeaderInfo();

  return (
    <div className="min-h-screen pb-24 flex flex-col max-w-xl mx-auto md:shadow-2xl md:bg-white md:dark:bg-darkblue-lighter md:my-4 md:rounded-[48px] overflow-hidden relative transition-colors duration-500">
      {currentView !== 'welcome' && (
        <>
          <Header
            title={headerInfo.title}
            subtitle={headerInfo.subtitle}
            showBack={headerInfo.showBack}
            onBack={handleBack}
            isDarkMode={isDarkMode}
            onToggleTheme={toggleTheme}
            onOpenNotifications={() => setCurrentView('notifications')}
            user={user}
            onOpenAuth={() => setShowAuthModal(true)}
          />
          <main
            ref={mainRef}
            className="flex-1 px-4 py-4 no-scrollbar overflow-y-auto"
          >
            {!isOnline && (
              <div className="mb-4 p-3 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-xl flex items-center gap-2 text-sm">
                <span className="material-icons-round text-yellow-600 dark:text-yellow-400 text-lg">wifi_off</span>
                <span className="text-yellow-800 dark:text-yellow-200 font-medium">Você está offline. Algumas funcionalidades podem estar limitadas.</span>
              </div>
            )}
            {renderContent()}
          </main>
          <BottomNav
            currentView={currentView === 'notifications' || currentView === 'feedback' ? (currentView === 'feedback' ? 'profile' : 'categories') : currentView}
            onViewChange={setCurrentView}
          />
        </>
      )}
      {currentView === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      {showInstallPrompt && deferredPrompt && (
        <InstallPrompt
          onInstall={handleInstallApp}
          onDismiss={handleDismissInstall}
        />
      )}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
        }}
      />
      {isSyncing && (
        <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:w-96 z-40 p-3 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-xl flex items-center gap-2 text-sm animate-in slide-in-from-bottom-4">
          <div className="w-4 h-4 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-blue-800 dark:text-blue-200 font-medium">Sincronizando dados...</span>
        </div>
      )}
    </div>
  );
};

export default App;
