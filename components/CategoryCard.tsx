
import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (cat: Category) => void;
  // Added isFollowing and onToggleFollow to fix App.tsx error
  isFollowing?: boolean;
  onToggleFollow?: (e: React.MouseEvent) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  onClick, 
  isFollowing, 
  onToggleFollow 
}) => {
  const getCategoryLabel = (id: string, title: string) => {
    const labels: Record<string, string> = {
      'productivity': 'produtividade',
      'video': 'vídeo',
      'text': 'texto',
      'business': 'negócios',
      'automation': 'automação',
      'image': 'imagem',
      'education': 'educação'
    };
    return labels[id] || title.toLowerCase();
  };

  return (
    <div className="bg-white dark:bg-darkblue-lighter rounded-[32px] shadow-sm border border-gray-100 dark:border-gray-800 p-6 hover:shadow-xl transition-all group overflow-hidden">
      <div className="flex items-start gap-4 mb-5">
        <div className={`flex-shrink-0 w-16 h-16 bg-brand/5 dark:bg-brand/10 rounded-2xl flex items-center justify-center overflow-hidden border border-brand/10 group-hover:border-brand/30 transition-all`}>
          <img 
            alt={category.title} 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
            src={category.icon} 
          />
        </div>
        <div className="flex-1 pt-2 flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-brand transition-colors">
            {category.title}
          </h2>
          {/* Added follow button to use the new props */}
          <button 
            onClick={onToggleFollow}
            className={`p-2 rounded-xl transition-all ${isFollowing ? 'bg-brand text-white' : 'bg-gray-50 dark:bg-darkblue-darker text-gray-400 hover:text-brand border border-gray-100 dark:border-gray-700'}`}
            title={isFollowing ? 'Seguindo' : 'Seguir categoria'}
          >
            <span className="material-icons-round text-lg">{isFollowing ? 'notifications_active' : 'notifications_none'}</span>
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-6 px-1">
        {category.subcategories.map((sub, idx) => (
          <div 
            key={idx}
            className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 hover:text-brand cursor-pointer transition-colors font-medium"
          >
            <span>{sub.name}</span>
            <span className="bg-gray-50 dark:bg-darkblue-darker px-3 py-1 rounded-lg text-[10px] font-bold text-gray-400 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
              {sub.count}
            </span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => onClick(category)}
        className="w-full inline-flex items-center justify-between text-xs font-bold text-brand uppercase tracking-widest hover:text-brand-dark transition-all py-3 px-2 border-t border-gray-50 dark:border-gray-800"
      >
        <span>Explorar {getCategoryLabel(category.id, category.title)}</span>
        <span className="material-icons-round text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
      </button>
    </div>
  );
};

export default CategoryCard;
