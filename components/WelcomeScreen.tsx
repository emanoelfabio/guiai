
import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-blue-500 to-indigo-600 dark:from-darkblue-darker dark:via-blue-900 dark:to-darkblue-darker opacity-100 transition-colors duration-500"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:2000ms]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob [animation-delay:4000ms]"></div>
        
        {/* Neural Pattern */}
        <div className="absolute inset-0 neural-bg opacity-20 dark:opacity-10 pointer-events-none"></div>
        
        {/* Pulsing Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse-slow [animation-delay:750ms] opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse-slow [animation-delay:1500ms] opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-8 py-12 max-w-md mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center items-center mt-10 animate-float">
          <div className="mb-4 relative">
            <div className="absolute inset-0 bg-white blur-xl opacity-20 rounded-full"></div>
            <span className="material-icons-round text-7xl text-white drop-shadow-lg relative z-10">smart_toy</span>
          </div>
          <h1 className="font-display text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-100 drop-shadow-sm">
            GuiAI
          </h1>
        </div>

        <div className="flex flex-col gap-8 mb-8">
          <div className="text-center space-y-4">
            <h2 className="font-display text-3xl font-bold leading-tight drop-shadow-md">
              Tudo o que você precisa para dominar a IA, em um só lugar.
            </h2>
            <p className="text-blue-50 dark:text-slate-300 text-lg font-medium leading-relaxed opacity-90">
              Explore as principais ferramentas de IA e aprenda a usá-las com eficácia.
            </p>
          </div>

          <button 
            onClick={onStart}
            className="group w-full bg-white text-brand hover:bg-blue-50 transition-all duration-300 py-5 px-6 rounded-full shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 font-bold text-xl"
          >
            <span>Começar Agora</span>
            <span className="material-icons-round transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>

          <div className="text-center">
            <p className="text-sm text-blue-100 dark:text-slate-400">
              Já tem uma conta? 
              <button className="ml-1 font-bold text-white hover:text-blue-200 dark:hover:text-blue-300 underline decoration-2 underline-offset-4 transition-colors">
                Entrar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
