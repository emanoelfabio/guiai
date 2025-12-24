
import React from 'react';
import { ToolNotification } from '../types';

// Updated props interface to fix App.tsx error
interface NotificationListProps {
  toolNotifications: ToolNotification[];
}

const NOTIFICATIONS = [
  {
    id: 1,
    date: '24 Mai, 2024',
    title: 'Sora: O futuro do vídeo chegou',
    excerpt: 'A OpenAI anunciou o Sora, um modelo que cria vídeos realistas a partir de texto. Veja como ele pode mudar a indústria.',
    category: 'Novidade',
    color: 'purple',
    url: 'https://openai.com/sora'
  },
  {
    id: 2,
    date: '22 Mai, 2024',
    title: 'Top 5 extensões para o Chrome',
    excerpt: 'Melhore sua produtividade com estas extensões que utilizam GPT-4o diretamente no seu navegador.',
    category: 'Dica',
    color: 'blue',
    url: 'https://www.zdnet.com/article/best-ai-chrome-extensions/'
  },
  
  {
    id: 4,
    date: '18 Mai, 2024',
    title: 'Claude 3 vs GPT-4 Turbo',
    excerpt: 'Fizemos um comparativo detalhado entre os dois maiores modelos de linguagem do mercado. Qual vence?',
    category: 'Artigo',
    color: 'orange',
    url: 'https://www.anthropic.com/news/claude-3-family'
  }
];

const NotificationList: React.FC<NotificationListProps> = ({ toolNotifications }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Display dynamic notifications from App first */}
      {toolNotifications.map((notif) => (
        <article 
          key={notif.id} 
          className="bg-white dark:bg-darkblue-lighter rounded-2xl overflow-hidden shadow-sm border border-brand/20 dark:border-brand/30 hover:shadow-md transition-shadow group"
        >
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand/10 text-brand`}>
                {notif.type === 'featured' ? 'Destaque' : 'Novo'}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
              <time className="text-xs text-gray-400 dark:text-gray-500">{notif.date}</time>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-brand transition-colors">
              {notif.toolName} em {notif.categoryName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {notif.type === 'featured' 
                ? `${notif.toolName} está em destaque na categoria ${notif.categoryName}!` 
                : `Uma nova ferramenta, ${notif.toolName}, foi adicionada a ${notif.categoryName}.`}
            </p>
          </div>
        </article>
      ))}

      {/* Static notifications */}
      {NOTIFICATIONS.map((notif) => (
        <article 
          key={notif.id} 
          className="bg-white dark:bg-darkblue-lighter rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group"
        >
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded 
                ${notif.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300' : ''}
                ${notif.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300' : ''}
                ${notif.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300' : ''}
                ${notif.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300' : ''}
              `}>
                {notif.category}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
              <time className="text-xs text-gray-400 dark:text-gray-500">{notif.date}</time>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-brand transition-colors">
              {notif.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
              {notif.excerpt}
            </p>
            
            <a 
              href={notif.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center text-[#0EA5E9] font-bold text-xs uppercase tracking-widest hover:text-brand transition-colors cursor-pointer group/link"
            >
              Ler artigo completo
              <span className="material-icons-round text-sm ml-1 group-hover/link:translate-x-1 transition-transform">chevron_right</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default NotificationList;
