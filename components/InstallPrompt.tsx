import React from 'react';

interface InstallPromptProps {
    onInstall: () => void;
    onDismiss: () => void;
}

const InstallPrompt: React.FC<InstallPromptProps> = ({ onInstall, onDismiss }) => {
    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-[slideUp_0.3s_ease-out]">
            <div className="glass rounded-2xl p-5 shadow-2xl border border-white/20 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center shadow-lg">
                        <span className="material-icons-round text-white text-2xl">download</span>
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-lg text-[#111827] dark:text-white mb-1">
                            Instalar GuiAI
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Instale o app para acesso rápido e uso offline
                        </p>

                        <div className="flex gap-2">
                            <button
                                onClick={onInstall}
                                className="flex-1 bg-gradient-to-r from-brand to-brand-dark text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                <span className="material-icons-round text-lg">install_mobile</span>
                                Instalar
                            </button>

                            <button
                                onClick={onDismiss}
                                className="px-4 py-2.5 rounded-xl font-semibold text-sm text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-200"
                            >
                                Agora não
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default InstallPrompt;
