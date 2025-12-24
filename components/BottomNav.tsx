
import React from 'react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'categories', label: 'Categorias', icon: 'grid_view' },
    { id: 'search', label: 'Busca', icon: 'search' },
    { id: 'favorites', label: 'Favoritos', icon: 'star_border' },
    { id: 'profile', label: 'Perfil', icon: 'person_outline' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-darkblue-darker border-t border-gray-100 dark:border-gray-800 pb-safe pt-2 px-6 flex justify-around items-center z-50 h-16 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] transition-colors">
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onViewChange(item.id as ViewState)}
          className={`flex flex-col items-center justify-center transition-all duration-300 min-w-[64px] ${
            currentView === item.id || (currentView === 'tools' && item.id === 'categories') 
              ? 'text-brand scale-110' 
              : 'text-gray-400 dark:text-gray-500'
          }`}
        >
          <span className="material-icons-round text-2xl">{item.icon}</span>
          <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;