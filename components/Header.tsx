import React from 'react';
import type { User } from '@supabase/supabase-js';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
  onOpenNotifications?: () => void;
  user?: User | null;
  onOpenAuth?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBack,
  onBack,
  isDarkMode,
  onToggleTheme,
  onOpenNotifications,
  user,
  onOpenAuth
}) => {
  return (
    <header className="sticky top-0 z-50 bg-brand dark:bg-darkblue-darker px-6 py-4 md:py-6 shadow-lg transition-colors">
      <div className="max-w-xl mx-auto flex items-center gap-3">
        {showBack ? (
          <button
            onClick={onBack}
            className="p-1 hover:bg-white/10 rounded-full transition-colors -ml-1 text-white"
            aria-label="Voltar"
          >
            <span className="material-icons-round text-2xl">arrow_back</span>
          </button>
        ) : (
          <button
            onClick={onOpenNotifications}
            className="p-1 hover:bg-white/10 rounded-full transition-colors -ml-1 relative text-white"
            aria-label="Notificações"
          >
            <span className="material-icons-round text-2xl">notifications</span>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-400 border-2 border-brand dark:border-darkblue-darker rounded-full"></span>
          </button>
        )}

        <div className="flex-1 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white leading-tight truncate px-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs md:text-sm text-blue-50 dark:text-gray-400 mt-1 truncate">
              {subtitle}
            </p>
          )}
        </div>

        <button
          onClick={onToggleTheme}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
          aria-label="Alternar tema"
        >
          <span className="material-icons-round text-2xl">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button
          onClick={onOpenAuth}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-white relative"
          aria-label={user ? 'Perfil' : 'Entrar'}
        >
          <span className="material-icons-round text-2xl">
            {user ? 'account_circle' : 'login'}
          </span>
          {user && (
            <span className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 border-2 border-brand dark:border-darkblue-darker rounded-full"></span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;