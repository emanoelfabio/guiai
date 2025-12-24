import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || 'https://swxuxerizcrdmdkekaly.supabase.co';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3eHV4ZXJpemNyZG1ka2VrYWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1OTE4OTksImV4cCI6MjA4MjE2Nzg5OX0.ACyvO_JyytUBSrJHfpVOdUdQ1FFp9l9q-l1U1b_QaLk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: window.localStorage,
    },
});

// Tipos para o banco de dados
export interface UserFavorite {
    id?: string;
    user_id: string;
    tool_name: string;
    tool_data: any;
    created_at?: string;
}

export interface UserFollowedCategory {
    id?: string;
    user_id: string;
    category_id: string;
    created_at?: string;
}
