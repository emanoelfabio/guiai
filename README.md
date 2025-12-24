# GuiAI - Guia de Ferramentas de IA

PWA completo com autenticação Supabase e sincronização de dados.

## 🚀 Deploy no Netlify

### Passo 1: Preparar Repositório Git

```bash
git init
git add .
git commit -m "Initial commit - GuiAI PWA com Supabase"
```

### Passo 2: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Crie um novo repositório (pode ser privado)
3. Siga as instruções para fazer push:

```bash
git remote add origin https://github.com/seu-usuario/guiai.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Netlify

1. Acesse https://app.netlify.com/
2. Clique em "Add new site" → "Import an existing project"
3. Escolha "GitHub" e autorize o Netlify
4. Selecione o repositório `guiai`
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Adicione as variáveis de ambiente:
   - `VITE_SUPABASE_URL`: https://swxuxerizcrdmdkekaly.supabase.co
   - `VITE_SUPABASE_ANON_KEY`: sua_chave_anon_aqui
7. Clique em "Deploy site"

### Passo 4: Configurar Supabase

1. Acesse seu projeto Supabase
2. Vá em **SQL Editor**
3. Execute o arquivo `supabase-setup.sql`
4. Vá em **Authentication** → **URL Configuration**
5. Adicione a URL do Netlify em "Site URL" e "Redirect URLs"

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📱 Funcionalidades

- ✅ PWA instalável
- ✅ Funciona offline
- ✅ Autenticação com email/senha
- ✅ Sincronização de favoritos
- ✅ Sincronização de categorias seguidas
- ✅ Dark/Light mode
- ✅ Responsivo

## 🔐 Segurança

- Row Level Security (RLS) habilitado
- Políticas de segurança configuradas
- Dados sincronizados apenas para usuário autenticado
- Fallback para localStorage quando offline

## 📝 Licença

MIT
