import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

type AuthMode = 'login' | 'signup' | 'reset';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [mode, setMode] = useState<AuthMode>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const { signIn, signUp, resetPassword } = useAuth();

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setMessage('');
        setLoading(true);

        try {
            if (mode === 'reset') {
                const { error } = await resetPassword(email);
                if (error) throw error;
                setMessage('Email de recuperação enviado! Verifique sua caixa de entrada.');
                setEmail('');
            } else if (mode === 'signup') {
                const { error } = await signUp(email, password);
                if (error) throw error;
                setMessage('Conta criada! Verifique seu email para confirmar.');
                setEmail('');
                setPassword('');
            } else {
                const { error } = await signIn(email, password);
                if (error) throw error;
                onSuccess();
                onClose();
            }
        } catch (err: any) {
            setError(err.message || 'Ocorreu um erro. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setEmail('');
        setPassword('');
        setError('');
        setMessage('');
        setMode('login');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-white dark:bg-darkblue-lighter rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand to-brand-dark p-6 text-white relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                    >
                        <span className="material-icons-round text-xl">close</span>
                    </button>
                    <h2 className="text-2xl font-display font-bold mb-1">
                        {mode === 'login' ? 'Entrar' : mode === 'signup' ? 'Criar Conta' : 'Recuperar Senha'}
                    </h2>
                    <p className="text-sm text-white/80">
                        {mode === 'login' ? 'Acesse sua conta GuiAI' : mode === 'signup' ? 'Crie sua conta gratuita' : 'Enviaremos um link de recuperação'}
                    </p>
                </div>

                {/* Tabs */}
                {mode !== 'reset' && (
                    <div className="flex border-b border-gray-200 dark:border-gray-700">
                        <button
                            onClick={() => setMode('login')}
                            className={`flex-1 py-3 text-sm font-semibold transition-colors ${mode === 'login'
                                    ? 'text-brand border-b-2 border-brand'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            Entrar
                        </button>
                        <button
                            onClick={() => setMode('signup')}
                            className={`flex-1 py-3 text-sm font-semibold transition-colors ${mode === 'signup'
                                    ? 'text-brand border-b-2 border-brand'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            Criar Conta
                        </button>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {error && (
                        <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-sm text-red-800 dark:text-red-200 flex items-center gap-2">
                            <span className="material-icons-round text-lg">error</span>
                            {error}
                        </div>
                    )}

                    {message && (
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-sm text-green-800 dark:text-green-200 flex items-center gap-2">
                            <span className="material-icons-round text-lg">check_circle</span>
                            {message}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkblue focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-gray-900 dark:text-white"
                            placeholder="seu@email.com"
                        />
                    </div>

                    {mode !== 'reset' && (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Senha
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-darkblue focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-gray-900 dark:text-white"
                                placeholder="••••••••"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-brand to-brand-dark text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Processando...
                            </>
                        ) : (
                            <>
                                <span className="material-icons-round">
                                    {mode === 'login' ? 'login' : mode === 'signup' ? 'person_add' : 'email'}
                                </span>
                                {mode === 'login' ? 'Entrar' : mode === 'signup' ? 'Criar Conta' : 'Enviar Email'}
                            </>
                        )}
                    </button>

                    {mode === 'login' && (
                        <button
                            type="button"
                            onClick={() => setMode('reset')}
                            className="w-full text-sm text-brand hover:underline"
                        >
                            Esqueceu sua senha?
                        </button>
                    )}

                    {mode === 'reset' && (
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            className="w-full text-sm text-gray-600 dark:text-gray-400 hover:text-brand"
                        >
                            ← Voltar para login
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AuthModal;
