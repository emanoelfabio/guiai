
import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  highlight?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, isFavorite, onToggleFavorite, highlight }) => {
  
  const HighlightText = ({ text, query }: { text: string; query?: string }) => {
    if (!query || !query.trim()) return <>{text}</>;
    
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
    
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-brand/20 dark:bg-brand text-brand dark:text-white rounded-sm px-0.5 font-semibold">{part}</mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div className="bg-white dark:bg-darkblue-lighter rounded-[24px] p-4 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-out flex gap-4 cursor-pointer group border-l-4 border-l-transparent hover:border-l-brand">
      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 dark:bg-darkblue-darker border border-gray-100 dark:border-gray-800 group-hover:border-brand/30 transition-colors shadow-inner">
        <img 
          src={tool.image} 
          alt={tool.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200?text=AI';
          }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight group-hover:text-brand transition-colors">
              <HighlightText text={tool.name} query={highlight} />
            </h3>
            <span className="text-[9px] font-extrabold text-brand bg-brand/10 dark:bg-brand/20 px-2 py-1 rounded-md uppercase tracking-wider">
              {tool.subcategory}
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            <HighlightText text={tool.description} query={highlight} />
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[11px] font-bold text-white bg-brand px-5 py-2 rounded-full hover:bg-brand-dark transition-all shadow-md active:scale-95 flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            Acessar <span className="material-icons-round text-sm">open_in_new</span>
          </a>

          <button 
            className={`transition-colors p-2 rounded-full hover:bg-gray-50 dark:hover:bg-darkblue-darker ${isFavorite ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500 hover:text-brand'}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.();
            }}
          >
            <span className="material-icons-round text-xl">
              {isFavorite ? 'star' : 'star_border'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;