
import { Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'productivity',
    title: 'Produtividade',
    icon: 'https://cdn-icons-png.flaticon.com/512/2618/2618245.png',
    accentColor: 'blue',
    subcategories: [
      { name: 'Assistente Pessoal', count: 10 },
      { name: 'Pesquisa', count: 10 },
      { name: 'Planilhas', count: 10 },
      { name: 'Tradutor', count: 10 },
      { name: 'Apresentações', count: 10 }
    ],
    tools: [
      // Assistente Pessoal (10)
      { name: 'ChatGPT', subcategory: 'Assistente Pessoal', description: 'O assistente de IA da OpenAI para conversas e tarefas.', url: 'https://chat.openai.com', image: 'https://picsum.photos/seed/chat/200' },
      { name: 'Claude', subcategory: 'Assistente Pessoal', description: 'IA da Anthropic com foco em segurança e textos longos.', url: 'https://claude.ai', image: 'https://picsum.photos/seed/claude/200' },
      { name: 'Gemini', subcategory: 'Assistente Pessoal', description: 'Assistente multimodal integrado ao ecossistema Google.', url: 'https://gemini.google.com', image: 'https://picsum.photos/seed/gemini/200' },
      { name: 'Microsoft Copilot', subcategory: 'Assistente Pessoal', description: 'IA integrada ao Windows e apps do Office.', url: 'https://copilot.microsoft.com', image: 'https://picsum.photos/seed/mscop/200' },
      { name: 'Pi', subcategory: 'Assistente Pessoal', description: 'IA conversacional focada em apoio emocional.', url: 'https://pi.ai', image: 'https://picsum.photos/seed/piai/200' },
      { name: 'HuggingChat', subcategory: 'Assistente Pessoal', description: 'Alternativa open-source da Hugging Face.', url: 'https://huggingface.co/chat', image: 'https://picsum.photos/seed/hfchat/200' },
      { name: 'Poe', subcategory: 'Assistente Pessoal', description: 'Plataforma para acessar múltiplos modelos de IA.', url: 'https://poe.com', image: 'https://picsum.photos/seed/poe/200' },
      { name: 'Perplexity', subcategory: 'Assistente Pessoal', description: 'Busca respostas diretas e cita fontes confiáveis.', url: 'https://perplexity.ai', image: 'https://picsum.photos/seed/perplx/200' },
      { name: 'Monica', subcategory: 'Assistente Pessoal', description: 'Extensão de navegador com múltiplos modelos.', url: 'https://monica.im', image: 'https://picsum.photos/seed/monica/200' },
      { name: 'HyperWrite', subcategory: 'Assistente Pessoal', description: 'Assistente para escrita e tarefas repetitivas.', url: 'https://hyperwriteai.com', image: 'https://picsum.photos/seed/hyper/200' },
      // Pesquisa (10)
      { name: 'Consensus', subcategory: 'Pesquisa', description: 'Encontre evidências científicas para suas perguntas.', url: 'https://consensus.app', image: 'https://picsum.photos/seed/cons/200' },
      { name: 'Elicit', subcategory: 'Pesquisa', description: 'Analise artigos científicos e automatize fluxos.', url: 'https://elicit.org', image: 'https://picsum.photos/seed/elic/200' },
      { name: 'ResearchRabbit', subcategory: 'Pesquisa', description: 'Descubra novos artigos acadêmicos relacionados.', url: 'https://researchrabbit.ai', image: 'https://picsum.photos/seed/rrabbit/200' },
      { name: 'Scite', subcategory: 'Pesquisa', description: 'Verifique citações e apoio científico.', url: 'https://scite.ai', image: 'https://picsum.photos/seed/scite/200' },
      { name: 'Scholarcy', subcategory: 'Pesquisa', description: 'Resuma e organize seus artigos científicos.', url: 'https://scholarcy.com', image: 'https://picsum.photos/seed/schol/200' },
      { name: 'Iris.ai', subcategory: 'Pesquisa', description: 'Pesquisador de IA para literatura científica.', url: 'https://iris.ai', image: 'https://picsum.photos/seed/iris/200' },
      { name: 'You.com', subcategory: 'Pesquisa', description: 'Mecanismo de busca com IA generativa.', url: 'https://you.com', image: 'https://picsum.photos/seed/you/200' },
      { name: 'Explainpaper', subcategory: 'Pesquisa', description: 'Explica partes complexas de documentos.', url: 'https://explainpaper.com', image: 'https://picsum.photos/seed/expl/200' },
      { name: 'ChatPDF', subcategory: 'Pesquisa', description: 'Converse com qualquer documento PDF.', url: 'https://chatpdf.com', image: 'https://picsum.photos/seed/pdf/200' },
      { name: 'Mirrorthink', subcategory: 'Pesquisa', description: 'IA para pesquisa de mercado avançada.', url: 'https://mirrorthink.ai', image: 'https://picsum.photos/seed/mt/200' },
      // Planilhas (10)
      { name: 'Formula Bot', subcategory: 'Planilhas', description: 'Gere fórmulas de Excel e Sheets a partir de texto.', url: 'https://formulabot.com', image: 'https://picsum.photos/seed/fbot/200' },
      { name: 'SheetAI', subcategory: 'Planilhas', description: 'Integração direta de IA no Google Sheets.', url: 'https://sheetai.app', image: 'https://picsum.photos/seed/sheet/200' },
      { name: 'Numerous.ai', subcategory: 'Planilhas', description: 'Automatize tarefas em planilhas.', url: 'https://numerous.ai', image: 'https://picsum.photos/seed/num/200' },
      { name: 'Ajelix', subcategory: 'Planilhas', description: 'Assistente para fórmulas e scripts VBA.', url: 'https://ajelix.com', image: 'https://picsum.photos/seed/aj/200' },
      { name: 'Rows', subcategory: 'Planilhas', description: 'A planilha da nova geração com IA nativa.', url: 'https://rows.com', image: 'https://picsum.photos/seed/rows/200' },
      { name: 'Arcwise', subcategory: 'Planilhas', description: 'Copilot avançado para Google Sheets.', url: 'https://arcwise.app', image: 'https://picsum.photos/seed/arc/200' },
      { name: 'Coefficient', subcategory: 'Planilhas', description: 'Conecte dados ao Excel com facilidade.', url: 'https://coefficient.io', image: 'https://picsum.photos/seed/coef/200' },
      { name: 'Excel Formulaizer', subcategory: 'Planilhas', description: 'Transforme problemas em fórmulas complexas.', url: 'https://excelformulaizer.com', image: 'https://picsum.photos/seed/ef/200' },
      { name: 'PromptLoop', subcategory: 'Planilhas', description: 'Processamento de texto em massa em planilhas.', url: 'https://promptloop.com', image: 'https://picsum.photos/seed/pl/200' },
      { name: 'GPTExcel', subcategory: 'Planilhas', description: 'Ferramenta gratuita para auxílio em planilhas.', url: 'https://gptexcel.uk', image: 'https://picsum.photos/seed/ge/200' },
      // Tradutor (10)
      { name: 'DeepL', subcategory: 'Tradutor', description: 'Tradução extremamente precisa e natural.', url: 'https://deepl.com', image: 'https://picsum.photos/seed/deepl/200' },
      { name: 'LXT', subcategory: 'Tradutor', description: 'Dados de tradução para IA empresarial.', url: 'https://lxt.ai', image: 'https://picsum.photos/seed/lxt/200' },
      { name: 'Stepes', subcategory: 'Tradutor', description: 'Tradução empresarial ágil.', url: 'https://stepes.com', image: 'https://picsum.photos/seed/step/200' },
      { name: 'RWS Trados', subcategory: 'Tradutor', description: 'Padrão da indústria de tradução profissional.', url: 'https://rws.com', image: 'https://picsum.photos/seed/rws/200' },
      { name: 'Smartling', subcategory: 'Tradutor', description: 'Localização de conteúdo digital.', url: 'https://smartling.com', image: 'https://picsum.photos/seed/smart/200' },
      { name: 'Translate.me', subcategory: 'Tradutor', description: 'Tradução rápida em tempo real.', url: 'https://translate.me', image: 'https://picsum.photos/seed/tr/200' },
      { name: 'TextUnited', subcategory: 'Tradutor', description: 'Gestão de projetos de tradução.', url: 'https://textunited.com', image: 'https://picsum.photos/seed/tu/200' },
      { name: 'Weglot', subcategory: 'Tradutor', description: 'Site multilíngue em poucos minutos.', url: 'https://weglot.com', image: 'https://picsum.photos/seed/weg/200' },
      { name: 'Lilt', subcategory: 'Tradutor', description: 'IA para tradução assistida por humanos.', url: 'https://lilt.com', image: 'https://picsum.photos/seed/lilt/200' },
      { name: 'Unbabel', subcategory: 'Tradutor', description: 'Suporte ao cliente multilíngue escalável.', url: 'https://unbabel.com', image: 'https://picsum.photos/seed/unb/200' },
      // Apresentações (10)
      { name: 'Gamma', subcategory: 'Apresentações', description: 'Crie slides e sites em minutos.', url: 'https://gamma.app', image: 'https://picsum.photos/seed/gamma/200' },
      { name: 'Beautiful.ai', subcategory: 'Apresentações', description: 'Slides que se ajustam sozinhos.', url: 'https://beautiful.ai', image: 'https://picsum.photos/seed/beau/200' },
      { name: 'Tome', subcategory: 'Apresentações', description: 'Storytelling visual com IA.', url: 'https://tome.app', image: 'https://picsum.photos/seed/tome/200' },
      { name: 'Pitch', subcategory: 'Apresentações', description: 'Design colaborativo de slides modernos.', url: 'https://pitch.com', image: 'https://picsum.photos/seed/pitch/200' },
      { name: 'SlidesAI', subcategory: 'Apresentações', description: 'Converta texto em Google Slides.', url: 'https://slidesai.io', image: 'https://picsum.photos/seed/sai/200' },
      { name: 'Decktopus', subcategory: 'Apresentações', description: 'Gerador de decks com design otimizado.', url: 'https://decktopus.com', image: 'https://picsum.photos/seed/deck/200' },
      { name: 'Prezi AI', subcategory: 'Apresentações', description: 'Apresentações dinâmicas e zoom.', url: 'https://prezi.com/ai', image: 'https://picsum.photos/seed/prezi/200' },
      { name: 'Simplified', subcategory: 'Apresentações', description: 'Design e IA integrados.', url: 'https://simplified.com', image: 'https://picsum.photos/seed/simp/200' },
      { name: 'Plus AI', subcategory: 'Apresentações', description: 'IA dentro do PowerPoint e Slides.', url: 'https://plusdocs.com', image: 'https://picsum.photos/seed/plus/200' },
      { name: 'Slidebean', subcategory: 'Apresentações', description: 'Focado em pitch para startups.', url: 'https://slidebean.com', image: 'https://picsum.photos/seed/bean/200' }
    ]
  },
  {
    id: 'education',
    title: 'Educação',
    icon: 'https://cdn-icons-png.flaticon.com/512/3976/3976625.png',
    accentColor: 'emerald',
    subcategories: [
      { name: 'Aprendizado Personalizado', count: 5 },
      { name: 'Planejamento de Aulas', count: 5 },
      { name: 'Avaliação e Feedback', count: 2 },
      { name: 'Suporte ao Aluno', count: 5 },
      { name: 'Outros Auxiliares', count: 1 }
    ],
    tools: [
      // Aprendizado Personalizado
      { name: 'Learn Place', subcategory: 'Aprendizado Personalizado', description: 'Assistente que adapta o conteúdo aos objetivos do aluno e professor.', url: 'https://learnplace.ai', image: 'https://picsum.photos/seed/lp/200' },
      { name: 'Studyable', subcategory: 'Aprendizado Personalizado', description: 'App de estudo com tutoria de IA e ajuda com dever de casa.', url: 'https://studyable.com', image: 'https://picsum.photos/seed/stud/200' },
      { name: 'Cramd AI', subcategory: 'Aprendizado Personalizado', description: 'Cria flashcards personalizados e resumos para estudo eficaz.', url: 'https://cramd.ai', image: 'https://picsum.photos/seed/cramd/200' },
      { name: 'StudyBuddy', subcategory: 'Aprendizado Personalizado', description: 'Plataforma colaborativa para gerenciar metas de estudo e tarefas.', url: 'https://studysync.com', image: 'https://picsum.photos/seed/sb/200' },
      { name: 'LearningRO', subcategory: 'Aprendizado Personalizado', description: 'Ambiente de estudo interativo com tutor de IA (RoTutor).', url: 'https://learningro.com', image: 'https://picsum.photos/seed/lro/200' },
      // Planejamento de Aulas
      { name: 'To Teach', subcategory: 'Planejamento de Aulas', description: 'Cria exercícios e conteúdo educativo personalizado para alunos.', url: 'https://to-teach.ai', image: 'https://picsum.photos/seed/ttch/200' },
      // Avaliação e Feedback
      { name: 'LazyTeacher', subcategory: 'Avaliação e Feedback', description: 'Grading Copilot para agilizar correções e feedback de trabalhos.', url: 'https://lazyteacher.ai', image: 'https://picsum.photos/seed/lt/200' },
      { name: 'ChatGPT Academic Monitor', subcategory: 'Avaliação e Feedback', description: 'Auxilia no monitoramento pedagógico do uso de IA pelos alunos.', url: 'https://academicmonitor.ai', image: 'https://picsum.photos/seed/am/200' },
      // Suporte ao Aluno
      { name: 'BloomNote AI', subcategory: 'Suporte ao Aluno', description: 'Estudo com geração de notas, flashcards e podcasts educativos.', url: 'https://bloomnote.ai', image: 'https://picsum.photos/seed/bn/200' },
      { name: 'Gnow', subcategory: 'Suporte ao Aluno', description: 'Assistente para preparação de provas e revisão de conteúdo.', url: 'https://gnow.ai', image: 'https://picsum.photos/seed/gnow/200' },
      { name: 'That Ish', subcategory: 'Suporte ao Aluno', description: 'Dicionário com IA focado em gírias e aprendizado de idiomas.', url: 'https://thatish.ai', image: 'https://picsum.photos/seed/ti/200' },
      { name: 'Blinkist', subcategory: 'Suporte ao Aluno', description: 'Resumos de livros não ficcionais úteis para pesquisa rápida.', url: 'https://blinkist.com', image: 'https://picsum.photos/seed/bl/200' },
      { name: 'QANDA', subcategory: 'Suporte ao Aluno', description: 'Plataforma focada em resolução de problemas de matemática.', url: 'https://qanda.ai', image: 'https://picsum.photos/seed/qa/200' },
      // Outros
      { name: 'Nano Banana Pro', subcategory: 'Outros Auxiliares', description: 'Ferramenta de IA multimodal com funções educacionais avançadas.', url: 'https://nanobanana.pro', image: 'https://picsum.photos/seed/nbp/200' }
    ]
  },
  {
    id: 'video',
    title: 'Vídeo',
    icon: 'https://cdn-icons-png.flaticon.com/512/3074/3074767.png',
    accentColor: 'orange',
    subcategories: [
      { name: 'Aprimorador De Vídeo', count: 10 },
      { name: 'Edição De Vídeo', count: 10 },
      { name: 'Geradores De Vídeo', count: 10 },
      { name: 'Texto Para Vídeo', count: 10 }
    ],
    tools: [
      // Aprimorador (10)
      { name: 'Topaz Video AI', subcategory: 'Aprimorador De Vídeo', description: 'Qualidade cinematográfica com redes neurais.', url: 'https://topazlabs.com', image: 'https://picsum.photos/seed/topaz/200' },
      { name: 'HitPaw Video Enhancer', subcategory: 'Aprimorador De Vídeo', description: 'Melhoria de nitidez instantânea.', url: 'https://hitpaw.com', image: 'https://picsum.photos/seed/hitp/200' },
      { name: 'AVCLabs', subcategory: 'Aprimorador De Vídeo', description: 'Restauração de vídeo antiga e baixa res.', url: 'https://avclabs.com', image: 'https://picsum.photos/seed/avc/200' },
      { name: 'Pixop', subcategory: 'Aprimorador De Vídeo', description: 'Remasterização automática na nuvem.', url: 'https://pixop.com', image: 'https://picsum.photos/seed/pix/200' },
      { name: 'VanceAI', subcategory: 'Aprimorador De Vídeo', description: 'Processamento online de nitidez.', url: 'https://vanceai.com', image: 'https://picsum.photos/seed/vance/200' },
      { name: 'Neural.love', subcategory: 'Aprimorador De Vídeo', description: 'Upscale para 4K gratuito.', url: 'https://neural.love', image: 'https://picsum.photos/seed/nl/200' },
      { name: 'Cutout.pro', subcategory: 'Aprimorador De Vídeo', description: 'Restauração e colorização inteligente.', url: 'https://cutout.pro', image: 'https://picsum.photos/seed/cut/200' },
      { name: 'Remini Video', subcategory: 'Aprimorador De Vídeo', description: 'IA para rostos detalhados em vídeo.', url: 'https://remini.ai', image: 'https://picsum.photos/seed/remv/200' },
      { name: 'VideoProc', subcategory: 'Aprimorador De Vídeo', description: 'Processamento de alta velocidade.', url: 'https://videoproc.com', image: 'https://picsum.photos/seed/vproc/200' },
      { name: 'TensorPix', subcategory: 'Aprimorador De Vídeo', description: 'IA para upscaling cinematográfico.', url: 'https://tensorpix.ai', image: 'https://picsum.photos/seed/tensor/200' },
      // Edição (10)
      { name: 'Descript', subcategory: 'Edição De Vídeo', description: 'Edite vídeos deletando palavras do texto.', url: 'https://descript.com', image: 'https://picsum.photos/seed/desc/200' },
      { name: 'Runway Gen-1', subcategory: 'Edição De Vídeo', description: 'Ferramentas de IA para criadores.', url: 'https://runwayml.com', image: 'https://picsum.photos/seed/run/200' },
      { name: 'InVideo', subcategory: 'Edição De Vídeo', description: 'Editor online com biblioteca enorme.', url: 'https://invideo.io', image: 'https://picsum.photos/seed/inv/200' },
      { name: 'Wisecut', subcategory: 'Edição De Vídeo', description: 'Autocorte de pausas e silêncios.', url: 'https://wisecut.video', image: 'https://picsum.photos/seed/wise/200' },
      { name: 'CapCut', subcategory: 'Edição De Vídeo', description: 'Melhor app para vídeos curtos.', url: 'https://capcut.com', image: 'https://picsum.photos/seed/cap/200' },
      { name: 'Munch', subcategory: 'Edição De Vídeo', description: 'Cria clipes curtos a partir de longos.', url: 'https://getmunch.com', image: 'https://picsum.photos/seed/mun/200' },
      { name: 'Veed.io', subcategory: 'Edição De Vídeo', description: 'Legendas e edição rápida web.', url: 'https://veed.io', image: 'https://picsum.photos/seed/veed/200' },
      { name: 'OpusClip', subcategory: 'Edição De Vídeo', description: 'IA para shorts virais.', url: 'https://opus.pro', image: 'https://picsum.photos/seed/opus/200' },
      { name: 'Kamua', subcategory: 'Edição De Vídeo', description: 'Redimensionamento inteligente.', url: 'https://kamua.com', image: 'https://picsum.photos/seed/kam/200' },
      { name: 'Synthesia Editor', subcategory: 'Edição De Vídeo', description: 'Edite apresentadores virtuais.', url: 'https://synthesia.io', image: 'https://picsum.photos/seed/synt/200' },
      // Geradores (10)
      { name: 'HeyGen', subcategory: 'Geradores De Vídeo', description: 'Avatares realistas que falam.', url: 'https://heygen.com', image: 'https://picsum.photos/seed/hey/200' },
      { name: 'Synthesia', subcategory: 'Geradores De Vídeo', description: 'Líder em avatares corporativos.', url: 'https://synthesia.io', image: 'https://picsum.photos/seed/syn2/200' },
      { name: 'Colossyan', subcategory: 'Geradores De Vídeo', description: 'Focado em e-learning.', url: 'https://colossyan.com', image: 'https://picsum.photos/seed/col/200' },
      { name: 'DeepBrain', subcategory: 'Geradores De Vídeo', description: 'Apresentadores virtuais para TV.', url: 'https://deepbrain.io', image: 'https://picsum.photos/seed/db/200' },
      { name: 'Elai.io', subcategory: 'Geradores De Vídeo', description: 'Gere vídeos a partir de posts.', url: 'https://elai.io', image: 'https://picsum.photos/seed/elai/200' },
      { name: 'D-ID', subcategory: 'Geradores De Vídeo', description: 'Fotos que falam.', url: 'https://d-id.com', image: 'https://picsum.photos/seed/did/200' },
      { name: 'Hour One', subcategory: 'Geradores De Vídeo', description: 'Qualidade profissional de estúdio.', url: 'https://hourone.ai', image: 'https://picsum.photos/seed/h1/200' },
      { name: 'Rask AI', subcategory: 'Geradores De Vídeo', description: 'Dublagem de vídeo inteligente.', url: 'https://rask.ai', image: 'https://picsum.photos/seed/rask/200' },
      { name: 'Rephrase.ai', subcategory: 'Geradores De Vídeo', description: 'Vídeos personalizados em massa.', url: 'https://rephrase.ai', image: 'https://picsum.photos/seed/reph/200' },
      { name: 'Tavus', subcategory: 'Geradores De Vídeo', description: 'Clonagem de vídeo pessoal.', url: 'https://tavus.io', image: 'https://picsum.photos/seed/tav/200' },
      // Texto Para Video (10)
      { name: 'Sora', subcategory: 'Texto Para Vídeo', description: 'Realismo impressionante da OpenAI.', url: 'https://openai.com/sora', image: 'https://picsum.photos/seed/sora/200' },
      { name: 'Runway Gen-2', subcategory: 'Texto Para Vídeo', description: 'Geração cinemática profissional.', url: 'https://runwayml.com', image: 'https://picsum.photos/seed/run2/200' },
      { name: 'Pika', subcategory: 'Texto Para Vídeo', description: 'Animações fluidas e artísticas.', url: 'https://pika.art', image: 'https://picsum.photos/seed/pika2/200' },
      { name: 'Luma', subcategory: 'Texto Para Vídeo', description: 'Vídeos 3D realistas.', url: 'https://lumalabs.ai', image: 'https://picsum.photos/seed/luma2/200' },
      { name: 'Kling', subcategory: 'Texto Para Vídeo', description: 'Nova potência em vídeo longo.', url: 'https://klingai.com', image: 'https://picsum.photos/seed/kling/200' },
      { name: 'Haiper', subcategory: 'Texto Para Vídeo', description: 'Focado em expressão criativa.', url: 'https://haiper.ai', image: 'https://picsum.photos/seed/haip/200' },
      { name: 'Kaiber', subcategory: 'Texto Para Vídeo', description: 'Visual music videos com IA.', url: 'https://kaiber.ai', image: 'https://picsum.photos/seed/kai/200' },
      { name: 'Moonvalley', subcategory: 'Texto Para Vídeo', description: 'Geração baseada em comunidade.', url: 'https://moonvalley.ai', image: 'https://picsum.photos/seed/moon/200' },
      { name: 'Morph', subcategory: 'Texto Para Vídeo', description: 'Criação de cenas para filmes.', url: 'https://morphstudio.com', image: 'https://picsum.photos/seed/morph/200' },
      { name: 'Deepshot', subcategory: 'Texto Para Vídeo', description: 'Recriação visual de diálogos.', url: 'https://deepshot.ai', image: 'https://picsum.photos/seed/dshot/200' }
    ]
  },
  {
    id: 'text',
    title: 'Geradores de Texto',
    icon: 'https://cdn-icons-png.flaticon.com/512/3131/3131621.png',
    accentColor: 'blue',
    subcategories: [
      { name: 'Geradores De Escrita', count: 10 },
      { name: 'Paráfrase', count: 10 },
      { name: 'Redação Publicitária', count: 10 },
      { name: 'Geradores De Prompts', count: 10 }
    ],
    tools: [
      // Escrita (10)
      { name: 'ChatGPT', subcategory: 'Geradores De Escrita', description: 'O modelo de chat mais versátil.', url: 'https://chat.openai.com', image: 'https://picsum.photos/seed/t1/200' },
      { name: 'Claude', subcategory: 'Geradores De Escrita', description: 'Escrita mais humana e segura.', url: 'https://claude.ai', image: 'https://picsum.photos/seed/t2/200' },
      { name: 'Jasper', subcategory: 'Geradores De Escrita', description: 'IA focada em blogs e marketing.', url: 'https://jasper.ai', image: 'https://picsum.photos/seed/t3/200' },
      { name: 'Copy.ai', subcategory: 'Geradores De Escrita', description: 'Gere conteúdo de marca rápido.', url: 'https://copy.ai', image: 'https://picsum.photos/seed/t4/200' },
      { name: 'Writesonic', subcategory: 'Geradores De Escrita', description: 'Artigos otimizados para SEO.', url: 'https://writesonic.com', image: 'https://picsum.photos/seed/t5/200' },
      { name: 'Rytr', subcategory: 'Geradores De Escrita', description: 'Assistente de escrita acessível.', url: 'https://rytr.me', image: 'https://picsum.photos/seed/t6/200' },
      { name: 'Anyword', subcategory: 'Geradores De Escrita', description: 'Copy com foco em performance.', url: 'https://anyword.com', image: 'https://picsum.photos/seed/t7/200' },
      { name: 'Wordtune', subcategory: 'Geradores De Escrita', description: 'Aprimore seu estilo de escrita.', url: 'https://wordtune.com', image: 'https://picsum.photos/seed/t8/200' },
      { name: 'Peppertype', subcategory: 'Geradores De Escrita', description: 'Criação rápida de posts sociais.', url: 'https://peppercontent.io', image: 'https://picsum.photos/seed/t9/200' },
      { name: 'ContentBot', subcategory: 'Geradores De Escrita', description: 'Automação completa de conteúdo.', url: 'https://contentbot.ai', image: 'https://picsum.photos/seed/t10/200' },
      // Paráfrase (10)
      { name: 'Quillbot', subcategory: 'Paráfrase', description: 'Reescreva frases mantendo o sentido.', url: 'https://quillbot.com', image: 'https://picsum.photos/seed/p1/200' },
      { name: 'Wordtune Read', subcategory: 'Paráfrase', description: 'Resuma textos longos com IA.', url: 'https://wordtune.com', image: 'https://picsum.photos/seed/p2/200' },
      { name: 'SpinBot', subcategory: 'Paráfrase', description: 'Troca rápida de palavras por sinônimos.', url: 'https://spinbot.com', image: 'https://picsum.photos/seed/p3/200' },
      { name: 'Paraphraser.io', subcategory: 'Paráfrase', description: 'Ferramenta online de reescrita.', url: 'https://paraphraser.io', image: 'https://picsum.photos/seed/p4/200' },
      { name: 'Prepostseo', subcategory: 'Paráfrase', description: 'IA para evitar plágio.', url: 'https://prepostseo.com', image: 'https://picsum.photos/seed/p5/200' },
      { name: 'Duplichecker', subcategory: 'Paráfrase', description: 'Verificação e reescrita de textos.', url: 'https://duplichecker.com', image: 'https://picsum.photos/seed/p6/200' },
      { name: 'EditPad', subcategory: 'Paráfrase', description: 'Editor com recursos de IA.', url: 'https://editpad.org', image: 'https://picsum.photos/seed/p7/200' },
      { name: 'Rephrase.info', subcategory: 'Paráfrase', description: 'Mude o tom dos seus textos.', url: 'https://rephrase.info', image: 'https://picsum.photos/seed/p8/200' },
      { name: 'SmallSEOTools', subcategory: 'Paráfrase', description: 'Suíte completa para redatores.', url: 'https://smallseotools.com', image: 'https://picsum.photos/seed/p10/200' },
      { name: 'Grammarly Rewrite', subcategory: 'Paráfrase', description: 'Sugestões de tom e clareza.', url: 'https://grammarly.com', image: 'https://picsum.photos/seed/p10/200' },
      // Redação Publicitária (10)
      { name: 'AdCreative.ai', subcategory: 'Redação Publicitária', description: 'Gere anúncios que convertem.', url: 'https://adcreative.ai', image: 'https://picsum.photos/seed/cp1/200' },
      { name: 'Copysmith', subcategory: 'Redação Publicitária', description: 'Focado em e-commerce e produtos.', url: 'https://copysmith.ai', image: 'https://picsum.photos/seed/cp2/200' },
      { name: 'Simplified', subcategory: 'Redação Publicitária', description: 'Copy e design num só lugar.', url: 'https://simplified.com', image: 'https://picsum.photos/seed/cp3/200' },
      { name: 'Bertha.ai', subcategory: 'Redação Publicitária', description: 'IA para WordPress.', url: 'https://bertha.ai', image: 'https://picsum.photos/seed/cp4/200' },
      { name: 'Typefully', subcategory: 'Redação Publicitária', description: 'Domine o Twitter com ganchos.', url: 'https://typefully.com', image: 'https://picsum.photos/seed/cp5/200' },
      { name: 'Hypotenuse', subcategory: 'Redação Publicitária', description: 'Descrição de produtos em massa.', url: 'https://hypotenuse.ai', image: 'https://picsum.photos/seed/cp6/200' },
      { name: 'Ink', subcategory: 'Redação Publicitária', description: 'Otimização semântica de conteúdo.', url: 'https://inkforall.com', image: 'https://picsum.photos/seed/cp7/200' },
      { name: 'MarketMuse', subcategory: 'Redação Publicitária', description: 'Estratégia de conteúdo via IA.', url: 'https://marketmuse.com', image: 'https://picsum.photos/seed/cp8/200' },
      { name: 'Scalenut', subcategory: 'Redação Publicitária', description: 'Plataforma SEO completa.', url: 'https://scalenut.com', image: 'https://picsum.photos/seed/cp9/200' },
      { name: 'Frase', subcategory: 'Redação Publicitária', description: 'Pesquisa e redação SEO rápida.', url: 'https://frase.io', image: 'https://picsum.photos/seed/cp10/200' },
      // Prompts (10)
      { name: 'PromptHero', subcategory: 'Geradores De Prompts', description: 'Busca de prompts para Midjourney.', url: 'https://prompthero.com', image: 'https://picsum.photos/seed/pr1/200' },
      { name: 'AIPRM', subcategory: 'Geradores De Prompts', description: 'Extensão de prompts para ChatGPT.', url: 'https://aiprm.com', image: 'https://picsum.photos/seed/pr2/200' },
      { name: 'PromptBase', subcategory: 'Geradores De Prompts', description: 'Mercado de prompts premium.', url: 'https://promptbase.com', image: 'https://picsum.photos/seed/pr3/200' },
      { name: 'Snack Prompt', subcategory: 'Geradores De Prompts', description: 'Reddit para prompts de IA.', url: 'https://snackprompt.com', image: 'https://picsum.photos/seed/pr4/200' },
      { name: 'FlowGPT', subcategory: 'Geradores De Prompts', description: 'Biblioteca de workflows de chat.', url: 'https://flowgpt.com', image: 'https://picsum.photos/seed/pr5/200' },
      { name: 'PromptPerfect', subcategory: 'Geradores De Prompts', description: 'Otimize seus prompts automaticamente.', url: 'https://promptperfect.jina.ai', image: 'https://picsum.photos/seed/pr6/200' },
      { name: 'PromptLayer', subcategory: 'Geradores De Prompts', description: 'CMS para seus prompts de IA.', url: 'https://promptlayer.com', image: 'https://picsum.photos/seed/pr7/200' },
      { name: 'BetterPrompt', subcategory: 'Geradores De Prompts', description: 'Sugestões de melhoria de entrada.', url: 'https://betterprompt.com', image: 'https://picsum.photos/seed/pr8/200' },
      { name: 'NeuralWriter', subcategory: 'Geradores De Prompts', description: 'Sugestão de prompts criativos.', url: 'https://neuralwriter.com', image: 'https://picsum.photos/seed/pr9/200' },
      { name: 'ChatHub', subcategory: 'Geradores De Prompts', description: 'Use vários chats com os mesmos prompts.', url: 'https://chathub.gg', image: 'https://picsum.photos/seed/pr10/200' }
    ]
  },
  {
    id: 'business',
    title: 'Negócios',
    icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281307.png',
    accentColor: 'cyan',
    subcategories: [
      { name: 'Construtores De Sites', count: 10 },
      { name: 'Marketing', count: 10 },
      { name: 'Finanças', count: 10 },
      { name: 'Mídia Social', count: 10 }
    ],
    tools: [
      // Sites (10)
      { name: 'Framer AI', subcategory: 'Construtores De Sites', description: 'Design e site com um prompt.', url: 'https://framer.com', image: 'https://picsum.photos/seed/w1/200' },
      { name: 'Durable', subcategory: 'Construtores De Sites', description: 'Site pronto em 30 segundos.', url: 'https://durable.co', image: 'https://picsum.photos/seed/w2/200' },
      { name: '10Web', subcategory: 'Construtores De Sites', description: 'WordPress automatizado com IA.', url: 'https://10web.io', image: 'https://picsum.photos/seed/w3/200' },
      { name: 'Wix ADI', subcategory: 'Construtores De Sites', description: 'Inteligência de design da Wix.', url: 'https://wix.com', image: 'https://picsum.photos/seed/w4/200' },
      { name: 'Hostinger AI', subcategory: 'Construtores De Sites', description: 'Gere seu site na hospedagem.', url: 'https://hostinger.com', image: 'https://picsum.photos/seed/w5/200' },
      { name: '60sec.site', subcategory: 'Construtores De Sites', description: 'Landing pages ultra rápidas.', url: 'https://60sec.site', image: 'https://picsum.photos/seed/w6/200' },
      { name: 'Jimdo', subcategory: 'Construtores De Sites', description: 'Criação de sites guiada por IA.', url: 'https://jimdo.com', image: 'https://picsum.photos/seed/w7/200' },
      { name: 'Zyro', subcategory: 'Construtores De Sites', description: 'Construtor fácil e econômico.', url: 'https://zyro.com', image: 'https://picsum.photos/seed/w8/200' },
      { name: 'B12', subcategory: 'Construtores De Sites', description: 'Sites focados em serviços profissionais.', url: 'https://b12.io', image: 'https://picsum.photos/seed/w9/200' },
      { name: 'Pineapple', subcategory: 'Construtores De Sites', description: 'Gere sites de blog e portfólio.', url: 'https://pineapplebuilder.com', image: 'https://picsum.photos/seed/w10/200' },
      // Marketing (10)
      { name: 'Mutiny', subcategory: 'Marketing', description: 'Personalização de site em escala.', url: 'https://mutinyhq.com', image: 'https://picsum.photos/seed/m1/200' },
      { name: 'Phrasee', subcategory: 'Marketing', description: 'Geração de copy que converte.', url: 'https://phrasee.co', image: 'https://picsum.photos/seed/m2/200' },
      { name: 'Persado', subcategory: 'Marketing', description: 'Linguagem motivacional via IA.', url: 'https://persado.com', image: 'https://picsum.photos/seed/m3/200' },
      { name: 'Albert', subcategory: 'Marketing', description: 'IA para gestão de anúncios digitais.', url: 'https://albert.ai', image: 'https://picsum.photos/seed/m4/200' },
      { name: 'Seventh Sense', subcategory: 'Marketing', description: 'Otimização de envio de e-mails.', url: 'https://theseventhsense.com', image: 'https://picsum.photos/seed/m5/200' },
      { name: 'Optimove', subcategory: 'Marketing', description: 'Hub de marketing de retenção.', url: 'https://optimove.com', image: 'https://picsum.photos/seed/m6/200' },
      { name: 'Invoca', subcategory: 'Marketing', description: 'IA de conversação para vendas.', url: 'https://invoca.com', image: 'https://picsum.photos/seed/m7/200' },
      { name: 'Drift', subcategory: 'Marketing', description: 'Chatbot de vendas conversacional.', url: 'https://drift.com', image: 'https://picsum.photos/seed/m8/200' },
      { name: 'HubSpot AI', subcategory: 'Marketing', description: 'IA integrada no CRM líder.', url: 'https://hubspot.com', image: 'https://picsum.photos/seed/m9/200' },
      { name: 'Instantly', subcategory: 'Marketing', description: 'E-mails frios automatizados.', url: 'https://instantly.ai', image: 'https://picsum.photos/seed/m10/200' },
      // Finanças (10)
      { name: 'Vic.ai', subcategory: 'Finanças', description: 'Automação inteligente de contas a pagar.', url: 'https://vic.ai', image: 'https://picsum.photos/seed/fi1/200' },
      { name: 'Spendesk', subcategory: 'Finanças', description: 'Gestão de gastos corporativos.', url: 'https://spendesk.com', image: 'https://picsum.photos/seed/fi2/200' },
      { name: 'Ramp', subcategory: 'Finanças', description: 'Controle de custos via IA.', url: 'https://ramp.com', image: 'https://picsum.photos/seed/fi3/200' },
      { name: 'Booke.ai', subcategory: 'Finanças', description: 'Contabilidade automatizada.', url: 'https://booke.ai', image: 'https://picsum.photos/seed/fi4/200' },
      { name: 'Datarails', subcategory: 'Finanças', description: 'FP&A avançado para Excel.', url: 'https://datarails.com', image: 'https://picsum.photos/seed/fi5/200' },
      { name: 'Glean.ai', subcategory: 'Finanças', description: 'Auditoria inteligente de faturas.', url: 'https://glean.ai', image: 'https://picsum.photos/seed/fi6/200' },
      { name: 'Truewind', subcategory: 'Finanças', description: 'O novo financeiro das startups.', url: 'https://truewind.ai', image: 'https://picsum.photos/seed/fi7/200' },
      { name: 'Finmark', subcategory: 'Finanças', description: 'Modelagem financeira simplificada.', url: 'https://finmark.com', image: 'https://picsum.photos/seed/fi8/200' },
      { name: 'Mosaic', subcategory: 'Finanças', description: 'Plataforma de inteligência estratégica.', url: 'https://mosaic.tech', image: 'https://picsum.photos/seed/fi9/200' },
      { name: 'Brex AI', subcategory: 'Finanças', description: 'Cartões e gestão de caixa inteligente.', url: 'https://brex.com', image: 'https://picsum.photos/seed/fi10/200' },
      // Social (10)
      { name: 'Lately', subcategory: 'Mídia Social', description: 'Crie posts a partir de qualquer link.', url: 'https://lately.ai', image: 'https://picsum.photos/seed/s1/200' },
      { name: 'Ocoya', subcategory: 'Mídia Social', description: 'Posts e agendamento em massa.', url: 'https://ocoya.com', image: 'https://picsum.photos/seed/s2/200' },
      { name: 'Predis.ai', subcategory: 'Mídia Social', description: 'Vídeos e posts completos com IA.', url: 'https://predis.ai', image: 'https://picsum.photos/seed/s3/200' },
      { name: 'FeedHive', subcategory: 'Mídia Social', description: 'Reciclagem e IA de engajamento.', url: 'https://feedhive.com', image: 'https://picsum.photos/seed/s4/200' },
      { name: 'Buffer AI', subcategory: 'Mídia Social', description: 'Assistente de escrita nas redes.', url: 'https://buffer.com', image: 'https://picsum.photos/seed/s5/200' },
      { name: 'Canva Magic Edit', subcategory: 'Mídia Social', description: 'Crie visuais virais em segundos.', url: 'https://canva.com', image: 'https://picsum.photos/seed/s6/200' },
      { name: 'ContentStudio', subcategory: 'Mídia Social', description: 'Cura e automação de conteúdo.', url: 'https://contentstudio.io', image: 'https://picsum.photos/seed/s7/200' },
      { name: 'Flick', subcategory: 'Mídia Social', description: 'Hashtags e legendas inteligentes.', url: 'https://flick.tech', image: 'https://picsum.photos/seed/s8/200' },
      { name: 'SocialBu', subcategory: 'Mídia Social', description: 'Gestão total de canais sociais.', url: 'https://socialbu.com', image: 'https://picsum.photos/seed/s9/200' },
      { name: 'Publer', subcategory: 'Mídia Social', description: 'O seu super-herói das redes sociais.', url: 'https://publer.io', image: 'https://picsum.photos/seed/s10/200' }
    ]
  },
  {
    id: 'automation',
    title: 'Automação',
    icon: 'https://cdn-icons-png.flaticon.com/512/2810/2810231.png',
    accentColor: 'red',
    subcategories: [
      { name: 'Fluxos De Trabalho', count: 10 },
      { name: 'Agentes De IA', count: 10 }
    ],
    tools: [
      // Workflows (10)
      { name: 'Zapier Central', subcategory: 'Fluxos De Trabalho', description: 'Líder em integração de apps.', url: 'https://zapier.com', image: 'https://picsum.photos/seed/au1/200' },
      { name: 'Make.com', subcategory: 'Fluxos De Trabalho', description: 'Automação visual ultra flexível.', url: 'https://make.com', image: 'https://picsum.photos/seed/au2/200' },
      { name: 'Bardeen', subcategory: 'Fluxos De Trabalho', description: 'Automação direto no navegador.', url: 'https://bardeen.ai', image: 'https://picsum.photos/seed/au3/200' },
      { name: 'IFTTT', subcategory: 'Fluxos De Trabalho', description: 'Automação simples para o dia a dia.', url: 'https://ifttt.com', image: 'https://picsum.photos/seed/au4/200' },
      { name: 'Pabbly', subcategory: 'Fluxos De Trabalho', description: 'Alternativa econômica ao Zapier.', url: 'https://pabbly.com', image: 'https://picsum.photos/seed/au5/200' },
      { name: 'Integrately', subcategory: 'Fluxos De Trabalho', description: 'Integrações de um clique.', url: 'https://integrately.com', image: 'https://picsum.photos/seed/au6/200' },
      { name: 'Tray.io', subcategory: 'Fluxos De Trabalho', description: 'Automação focada em empresas.', url: 'https://tray.io', image: 'https://picsum.photos/seed/au7/200' },
      { name: 'Workato', subcategory: 'Fluxos De Trabalho', description: 'Integração empresarial de alto nível.', url: 'https://workato.com', image: 'https://picsum.photos/seed/au8/200' },
      { name: 'n8n', subcategory: 'Fluxos De Trabalho', description: 'Workflows auto-hospedados.', url: 'https://n8n.io', image: 'https://picsum.photos/seed/au9/200' },
      { name: 'Celigo', subcategory: 'Fluxos De Trabalho', description: 'Integração para sistemas complexos.', url: 'https://celigo.com', image: 'https://picsum.photos/seed/au10/200' },
      // Agentes (10)
      { name: 'AutoGPT', subcategory: 'Agentes De IA', description: 'O agente autônomo original.', url: 'https://autogpt.org', image: 'https://picsum.photos/seed/ag1/200' },
      { name: 'BabyAGI', subcategory: 'Agentes De IA', description: 'Gestão de tarefas inteligente.', url: 'https://github.com/yoheinakajima/babyagi', image: 'https://picsum.photos/seed/ag2/200' },
      { name: 'AgentGPT', subcategory: 'Agentes De IA', description: 'Agentes autônomos no navegador.', url: 'https://agentgpt.reworkd.ai', image: 'https://picsum.photos/seed/ag3/200' },
      { name: 'Godmode', subcategory: 'Agentes De IA', description: 'Interface visual para agentes.', url: 'https://godmode.space', image: 'https://picsum.photos/seed/ag4/200' },
      { name: 'SuperAGI', subcategory: 'Agentes De IA', description: 'Infraestrutura para agentes de IA.', url: 'https://superagi.com', image: 'https://picsum.photos/seed/ag5/200' },
      { name: 'Lindy.ai', subcategory: 'Agentes De IA', description: 'Assistente pessoal que executa tudo.', url: 'https://lindy.ai', image: 'https://picsum.photos/seed/ag6/200' },
      { name: 'Relevance AI', subcategory: 'Agentes De IA', description: 'Agentes de dados e IA empresarial.', url: 'https://relevanceai.com', image: 'https://picsum.photos/seed/ag7/200' },
      { name: 'Taskade Agents', subcategory: 'Agentes De IA', description: 'Equipe virtual de produtividade.', url: 'https://taskade.com', image: 'https://picsum.photos/seed/ag8/200' },
      { name: 'Mindstudio', subcategory: 'Agentes De IA', description: 'Plataforma para criar apps de IA.', url: 'https://mindstudio.ai', image: 'https://picsum.photos/seed/ag9/200' },
      { name: 'Induced AI', subcategory: 'Agentes De IA', description: 'Agentes que operam seu browser.', url: 'https://induced.ai', image: 'https://picsum.photos/seed/ag10/200' }
    ]
  },
  {
    id: 'image',
    title: 'Imagem',
    icon: 'https://cdn-icons-png.flaticon.com/512/2985/2985149.png',
    accentColor: 'purple',
    subcategories: [
      { name: 'Geradores De Imagem', count: 10 },
      { name: 'Edição De Imagem', count: 10 },
      { name: 'Design', count: 10 }
    ],
    tools: [
      // Geradores De Imagem (10)
      { name: 'Midjourney', subcategory: 'Geradores De Imagem', description: 'A IA mais artística e popular para geração de imagens via Discord.', url: 'https://midjourney.com', image: 'https://picsum.photos/seed/img1/200' },
      { name: 'DALL-E 3', subcategory: 'Geradores De Imagem', description: 'Extrema precisão de prompts integrada diretamente no ChatGPT.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/img2/200' },
      { name: 'Stable Diffusion', subcategory: 'Geradores De Imagem', description: 'Poderoso modelo open-source com controle total via checkpoints e LoRAs.', url: 'https://stability.ai', image: 'https://picsum.photos/seed/img3/200' },
      { name: 'Leonardo.ai', subcategory: 'Geradores De Imagem', description: 'Suíte completa com diversos modelos treinados para artes e jogos.', url: 'https://leonardo.ai', image: 'https://picsum.photos/seed/img4/200' },
      { name: 'Playground AI', subcategory: 'Geradores De Imagem', description: 'Interface fácil para criar e editar imagens usando modelos SOTA.', url: 'https://playgroundai.com', image: 'https://picsum.photos/seed/img5/200' },
      { name: 'Ideogram', subcategory: 'Geradores De Imagem', description: 'A melhor IA para renderizar textos nítidos dentro de imagens.', url: 'https://ideogram.ai', image: 'https://picsum.photos/seed/img6/200' },
      { name: 'BlueWillow', subcategory: 'Geradores De Imagem', description: 'Alternativa gratuita e potente ao Midjourney focada em comunidade.', url: 'https://bluewillow.ai', image: 'https://picsum.photos/seed/img7/200' },
      { name: 'Adobe Firefly', subcategory: 'Geradores De Imagem', description: 'IA ética da Adobe para criação segura em uso comercial.', url: 'https://adobe.com/firefly', image: 'https://picsum.photos/seed/img8/200' },
      { name: 'Civitai', subcategory: 'Geradores De Imagem', description: 'A maior biblioteca de modelos personalizados para Stable Diffusion.', url: 'https://civitai.com', image: 'https://picsum.photos/seed/img9/200' },
      { name: 'Artbreeder', subcategory: 'Geradores De Imagem', description: 'Misture imagens para criar retratos e paisagens fantásticas.', url: 'https://artbreeder.com', image: 'https://picsum.photos/seed/img10/200' },
      // Edição De Imagem (10)
      { name: 'Magnific.ai', subcategory: 'Edição De Imagem', description: 'O upscaler de imagem mais avançado, adicionando detalhes impressionantes.', url: 'https://magnific.ai', image: 'https://picsum.photos/seed/img11/200' },
      { name: 'Canva Magic Edit', subcategory: 'Edição De Imagem', description: 'Troque ou remova objetos da sua foto com descrições simples.', url: 'https://canva.com', image: 'https://picsum.photos/seed/img12/200' },
      { name: 'Photoroom', subcategory: 'Edição De Imagem', description: 'Ideal para remover fundos e criar fotos profissionais de produtos.', url: 'https://photoroom.com', image: 'https://picsum.photos/seed/img13/200' },
      { name: 'Krea.ai', subcategory: 'Edição De Imagem', description: 'Refinamento de imagem em tempo real e upscaling de alta qualidade.', url: 'https://krea.ai', image: 'https://picsum.photos/seed/img14/200' },
      { name: 'Remove.bg', subcategory: 'Edição De Imagem', description: 'Especialista em remover fundos de imagens instantaneamente.', url: 'https://remove.bg', image: 'https://picsum.photos/seed/img15/200' },
      { name: 'Magic Eraser', subcategory: 'Edição De Imagem', description: 'Remova pessoas ou objetos indesejados de fotos em segundos.', url: 'https://magiceraser.io', image: 'https://picsum.photos/seed/img16/200' },
      { name: 'Luminar Neo', subcategory: 'Edição De Imagem', description: 'Editor profissional que usa IA para céu, pele e iluminação.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/img17/200' },
      { name: 'Topaz Photo AI', subcategory: 'Edição De Imagem', description: 'Recupere fotos borradas e melhore a nitidez drasticamente.', url: 'https://topazlabs.com', image: 'https://picsum.photos/seed/img18/200' },
      { name: 'Palette.fm', subcategory: 'Edição De Imagem', description: 'Colorização automática e artística de fotos em preto e branco.', url: 'https://palette.fm', image: 'https://picsum.photos/seed/img19/200' },
      { name: 'Let\'s Enhance', subcategory: 'Edição De Imagem', description: 'Aumente a resolução de imagens sem perder a qualidade.', url: 'https://letsenhance.io', image: 'https://picsum.photos/seed/img20/200' },
      // Design (10)
      { name: 'Looka', subcategory: 'Design', description: 'Criação de logotipos e identidade visual completa para sua marca.', url: 'https://looka.com', image: 'https://picsum.photos/seed/img21/200' },
      { name: 'Uizard', subcategory: 'Design', description: 'Transforme esboços feitos à mão em designs de UI editáveis.', url: 'https://uizard.io', image: 'https://picsum.photos/seed/img22/200' },
      { name: 'Galileo AI', subcategory: 'Design', description: 'Criação instantânea de interfaces mobile a partir de texto.', url: 'https://usegalileo.ai', image: 'https://picsum.photos/seed/img23/200' },
      { name: 'Khroma', subcategory: 'Design', description: 'Paletas de cores infinitas baseadas no seu gosto pessoal.', url: 'https://khroma.co', image: 'https://picsum.photos/seed/img24/200' },
      { name: 'Brandmark', subcategory: 'Design', description: 'Sistemas de design de marcas profissionais gerados por IA.', url: 'https://brandmark.io', image: 'https://picsum.photos/seed/img25/200' },
      { name: 'Relume', subcategory: 'Design', description: 'Crie sitemaps e wireframes para Webflow e Figma com IA.', url: 'https://relume.io', image: 'https://picsum.photos/seed/img26/200' },
      { name: 'Microsoft Designer', subcategory: 'Design', description: 'Crie artes para redes sociais de forma rápida e intuitiva.', url: 'https://designer.microsoft.com', image: 'https://picsum.photos/seed/img27/200' },
      { name: 'Adobe Express', subcategory: 'Design', description: 'Design rápido com ferramentas mágicas integradas.', url: 'https://adobe.com/express', image: 'https://picsum.photos/seed/img28/200' },
      { name: 'Recraft.ai', subcategory: 'Design', description: 'IA focada em geração de arte vetorial e ilustrações para marcas.', url: 'https://recraft.ai', image: 'https://picsum.photos/seed/img29/200' },
      { name: 'Appy Pie Design', subcategory: 'Design', description: 'Gerador de design gráfico para quem não é designer.', url: 'https://appypie.com/design', image: 'https://picsum.photos/seed/img30/200' }
    ]
  }
];
