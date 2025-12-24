import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { AITool } from '../types';

interface SyncQueue {
    favorites: AITool[];
    followedCategories: string[];
}

export function useSync(userId: string | undefined, isOnline: boolean) {
    const [syncQueue, setSyncQueue] = useState<SyncQueue>({
        favorites: [],
        followedCategories: [],
    });
    const [isSyncing, setIsSyncing] = useState(false);

    // Sincronizar favoritos para o Supabase
    const syncFavoritesToCloud = async (favorites: AITool[]) => {
        if (!userId) return;

        try {
            // Deletar favoritos antigos
            await supabase
                .from('user_favorites')
                .delete()
                .eq('user_id', userId);

            // Inserir novos favoritos
            if (favorites.length > 0) {
                const favoritesData = favorites.map(tool => ({
                    user_id: userId,
                    tool_name: tool.name,
                    tool_data: tool,
                }));

                await supabase
                    .from('user_favorites')
                    .insert(favoritesData);
            }
        } catch (error) {
            console.error('Erro ao sincronizar favoritos:', error);
            throw error;
        }
    };

    // Sincronizar categorias seguidas para o Supabase
    const syncFollowedCategoriesToCloud = async (categories: string[]) => {
        if (!userId) return;

        try {
            // Deletar categorias antigas
            await supabase
                .from('user_followed_categories')
                .delete()
                .eq('user_id', userId);

            // Inserir novas categorias
            if (categories.length > 0) {
                const categoriesData = categories.map(catId => ({
                    user_id: userId,
                    category_id: catId,
                }));

                await supabase
                    .from('user_followed_categories')
                    .insert(categoriesData);
            }
        } catch (error) {
            console.error('Erro ao sincronizar categorias:', error);
            throw error;
        }
    };

    // Carregar dados do Supabase
    const loadFromCloud = async () => {
        if (!userId) return { favorites: [], followedCategories: [] };

        try {
            // Carregar favoritos
            const { data: favoritesData } = await supabase
                .from('user_favorites')
                .select('tool_data')
                .eq('user_id', userId);

            // Carregar categorias seguidas
            const { data: categoriesData } = await supabase
                .from('user_followed_categories')
                .select('category_id')
                .eq('user_id', userId);

            return {
                favorites: favoritesData?.map(f => f.tool_data) || [],
                followedCategories: categoriesData?.map(c => c.category_id) || [],
            };
        } catch (error) {
            console.error('Erro ao carregar dados da nuvem:', error);
            return { favorites: [], followedCategories: [] };
        }
    };

    // Sincronizar quando voltar online
    useEffect(() => {
        if (isOnline && userId && (syncQueue.favorites.length > 0 || syncQueue.followedCategories.length > 0)) {
            setIsSyncing(true);

            Promise.all([
                syncFavoritesToCloud(syncQueue.favorites),
                syncFollowedCategoriesToCloud(syncQueue.followedCategories),
            ])
                .then(() => {
                    setSyncQueue({ favorites: [], followedCategories: [] });
                })
                .finally(() => {
                    setIsSyncing(false);
                });
        }
    }, [isOnline, userId]);

    return {
        syncFavoritesToCloud,
        syncFollowedCategoriesToCloud,
        loadFromCloud,
        addToSyncQueue: setSyncQueue,
        isSyncing,
    };
}
