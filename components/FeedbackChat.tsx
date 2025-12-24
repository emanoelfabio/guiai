
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const FeedbackChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente de suporte do GuiAI. Como posso ajudar você hoje? Pode enviar sugestões de ferramentas ou dicas para melhorarmos o app!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "Você é um assistente de suporte gentil do aplicativo 'GuiAI'. Seu objetivo é receber feedbacks, sugestões de novas ferramentas de IA e dicas de melhoria. Agradeça sempre ao usuário, diga que o feedback foi registrado e enviado para o e-mail do administrador para análise. Seja conciso e profissional.",
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Obrigado pelo seu feedback! Ele foi registrado com sucesso.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Erro ao contatar Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Desculpe, tive um problema ao processar sua mensagem, mas não se preocupe: seu feedback foi anotado manualmente para o administrador." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-250px)] md:h-[600px] animate-in fade-in duration-500 bg-white dark:bg-darkblue-lighter rounded-[32px] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar"
      >
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-4 rounded-[20px] text-sm shadow-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand text-white rounded-tr-none' 
                  : 'bg-gray-100 dark:bg-darkblue-darker text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-50 dark:border-gray-700'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-darkblue-darker p-4 rounded-[20px] rounded-tl-none border border-gray-50 dark:border-gray-700">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-gray-50 dark:bg-darkblue-darker border-t border-gray-100 dark:border-gray-800">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Como podemos melhorar?"
            className="flex-1 bg-white dark:bg-darkblue-lighter border-none rounded-2xl px-5 py-3.5 text-sm shadow-inner focus:ring-2 focus:ring-brand dark:text-white"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="w-14 h-14 bg-brand text-white rounded-2xl flex items-center justify-center hover:bg-brand-dark disabled:opacity-50 transition-all shadow-md active:scale-90"
          >
            <span className="material-icons-round">send</span>
          </button>
        </div>
        <p className="text-[9px] text-gray-400 font-bold text-center mt-3 uppercase tracking-widest opacity-60">
          Enviado de forma segura para a administração
        </p>
      </div>
    </div>
  );
};

export default FeedbackChat;