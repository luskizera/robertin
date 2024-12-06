const { fs, colors } = require('./index.js');
exports.menu = (prefix, NomeDoBot, sender, NickDono, packname) => { 
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝙎𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━ 📋 𝐃𝐢𝐯𝐞𝐫𝐬𝐨𝐬 𝐌𝐞𝐧𝐮𝐬 ━━━━━┓
┃
┃ 📌 *${prefix}Menudono* - Menu do Dono
┃ 📌 *${prefix}Menuadm* - Menu de Administrador
┃ 📌 *${prefix}Menupremium* - Menu VIP
┃ 📌 *${prefix}Efeitosimg* - Menu de Efeitos de Imagem
┃ 📌 *${prefix}Logos* - Menu de Logos
┃ 📌 *${prefix}Menubrincadeira* - Menu de Jogos e Brincadeiras
┃ 📌 *${prefix}MenuRpg* - Menu RPG
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 👥 𝐂𝐌𝐃𝐒 𝐝𝐞 𝐌𝐞𝐦𝐛𝐫𝐨 ━━━━┓
┃
┃ 💬 *${prefix}Infobot* - Informações do Bot
┃ 🌐 *${prefix}Idiomas* - Lista de Idiomas (Gtts)
┃ 💰 *${prefix}Saldo* - Verificar Saldo Disponível
┃ ❓ *${prefix}Bug* - Reportar Erro ou Bug
┃ 💡 *${prefix}Sugestao* - Enviar Sugestão
┃ ⭐ *${prefix}Avalie* - Avaliar o Bot
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🤖 𝐂𝐌𝐃𝐒 𝐝𝐞 𝐈𝐧𝐭𝐞𝐥𝐢𝐠ê𝐧𝐜𝐢𝐚 ━━━━┓
┃
┃ 🤔 *${prefix}Bot* - Perguntar ao Bot
┃ ❓ *${prefix}Pergunta* - Realizar uma Pergunta
┃ 🧠 *${prefix}Gpt* - ChatGPT (Texto)
┃ 🔊 *${prefix}Gptvoz* - Resposta em Áudio
┃ 🖼️ *${prefix}Criar-img* - Criar Imagem a partir de Texto
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🔍 𝐏𝐞𝐬𝐪𝐮𝐢𝐬𝐚𝐬/𝐁𝐚𝐢𝐱𝐚𝐫 ━━━━┓
┃
┃ 🎵 *${prefix}Play* - Pesquisar Música
┃ 📹 *${prefix}Playmp4* - Baixar Vídeo MP4
┃ 📁 *${prefix}Playdoc* - Baixar Documento de Música
┃ 🎶 *${prefix}Playmix* - Mix de Músicas
┃ 🔊 *${prefix}Play_audio* - Baixar Áudio (Nome/Url)
┃ 🎥 *${prefix}Play_video* - Baixar Vídeo (Nome/Url)
┃ 🎭 *${prefix}Audiomeme* - Procurar por Áudio de Meme
┃ 🎶 *${prefix}Shazam* - Identificar Música pelo Áudio
┃ 📹 *${prefix}Tiktok* - Baixar Vídeo do TikTok
┃ 🎵 *${prefix}Tiktok_audio* - Baixar Áudio do TikTok
┃ 📸 *${prefix}Tiktok_img* - Baixar Imagem do TikTok
┃ 📹 *${prefix}Facebook* - Baixar Vídeo do Facebook
┃ 🎵 *${prefix}Face_audio* - Baixar Áudio do Facebook
┃ 🎥 *${prefix}Face_video* - Baixar Vídeo do Facebook
┃ 🐦 *${prefix}Twitter* - Baixar do Twitter (Link)
┃ 🎵 *${prefix}Twitter_audio* - Baixar Áudio do Twitter
┃ 📹 *${prefix}Twitter_video* - Baixar Vídeo do Twitter
┃ 📸 *${prefix}Instagram* - Baixar Conteúdo do Instagram
┃ 🎥 *${prefix}Insta_video* - Baixar Vídeo do Instagram
┃ 🎵 *${prefix}Insta_audio* - Baixar Áudio do Instagram
┃ 📸 *${prefix}Pinterest* - Pesquisar Imagem no Pinterest
┃ 🔍 *${prefix}Gimage* - Pesquisa Google Imagens
┃ 📦 *${prefix}Mediafire* - Baixar Arquivo do Mediafire
┃ 🌌 *${prefix}Nasa* - Imagem Astronômica do Dia (Ex: 19-10-2007)
┃ 🎤 *${prefix}Lyrics* - Letra de Músicas
┃ 📱 *${prefix}Playstore* - Pesquisar Aplicativo na PlayStore
┃ ♈ *${prefix}Signo* - Horóscopo do Signo
┃ 🛒 *${prefix}Amazon* - Pesquisar Produto na Amazon
┃ 🛍️ *${prefix}Americanas* - Pesquisar Produto nas Americanas
┃ 📚 *${prefix}Wikipedia* - Pesquisa na Wikipedia
┃ 📝 *${prefix}Corretor* - Corrigir Texto
┃ 📊 *${prefix}Pensador* - Pesquisar no Pensador
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 📊 𝐂𝐌𝐃𝐒 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐯𝐨𝐬 ━━━━┓
┃
┃ ⚡ *${prefix}Ping* - Testar Velocidade do Bot
┃ 🔄 *${prefix}Atividade* - Ver Atividade no Grupo
┃ 📊 *${prefix}Rankativo* - Ranking de Usuários Ativos
┃ 📈 *${prefix}Checkativo* - Verificar Atividade de um Usuário
┃ 🏆 *${prefix}Ranklevel* - Níveis do Grupo
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🎮 𝐉𝐨𝐠𝐨𝐬/𝐐𝐮𝐢𝐳 ━━━━┓
┃
┃ 🔄 *${prefix}Resetforca* - Reiniciar Jogo da Forca
┃ ✊ *${prefix}Jogodaforca* - Jogo da Forca
┃ ✌️ *${prefix}Ppt* - Pedra, Papel ou Tesoura
┃ 🧩 *${prefix}Jogodavelha* - Jogo da Velha
┃ 🎰 *${prefix}Cassino* - Jogo do Cassino
┃ 🎲 *${prefix}Dado* - Rolar um Dado
┃ 💰 *${prefix}Caracoroa* - Cara ou Coroa
┃ 🎣 *${prefix}Pescar* - Pescar um Peixe
┃ ❓ *${prefix}Anagrama* - Resolução de Anagramas
┃ 🍖 *${prefix}Churrasco* - Fazer um Churrasco Virtual
┃ 🐾 *${prefix}Quizanimal* - Quiz sobre Animais
┃ ⏳ *${prefix}Quando* - Pergunta sobre "Quando"
┃ ❓ *${prefix}Vab* - Qual você prefere?
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🖼️ 𝐅𝐢𝐠𝐮𝐫𝐢𝐧𝐡𝐚𝐬 ━━━━┓
┃
┃ 📝 *${prefix}Attp* - Criar Figurinha com Texto
┃ 📝 *${prefix}Attp2* até *${prefix}Attp10* - Variações de Texto para Figurinha
┃ 🖼️ *${prefix}Ttp* - Criar Texto em Imagem
┃ 🌟 *${prefix}Fsticker* - Criar Figurinha a partir de Imagem
┃ 🖼️ *${prefix}Sticker* - Converter Imagem em Figurinha
┃ 🔄 *${prefix}Toimg* - Converter Figurinha em Imagem
┃ 🔄 *${prefix}Togif* - Converter Figurinha em GIF
┃ 🔥 *${prefix}Roubar* - Roubar uma Figurinha (Texto/Texto)
┃ 🔍 *${prefix}Buscar_stk* - Buscar Figurinha pelo Nome
┃ 🎨 *${prefix}Figaleatoria* - Solicitar Figurinha Aleatória
┃ 📊 *${prefix}figemoji* - Figurinhas de Emojis
┃ 📊 *${prefix}figroblox* - Figurinhas de Roblox
┃ 📊 *${prefix}figmeme* - Figurinhas de Memes
┃ 📊 *${prefix}figanime* - Figurinhas de Animes
┃ 📊 *${prefix}figcoreana* - Figurinhas Coreanas
┃ 📊 *${prefix}figraiva* - Figurinhas de Raiva
┃ 📊 *${prefix}figengracada* - Figurinhas Engraçadas
┃ 📊 *${prefix}figdesenho* - Figurinhas de Desenhos
┃ 📝 *${prefix}Qc* - Criar Figurinha a partir de Mensagem
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🔀 𝐂𝐌𝐃𝐒 𝐀𝐥𝐞𝐚𝐭ó𝐫𝐢𝐨𝐬 ━━━━┓
┃
┃ 🔊 *${prefix}Gtts* - Texto para Fala (Idioma + Texto)
┃ 🔗 *${prefix}Emoji* - Combinação de Emojis
┃ 🤝 *${prefix}Emojimix* - Misturar Dois Emojis
┃ 🖋️ *${prefix}Tabela* - Tabela de Letras/Simbolos
┃ 📖 *${prefix}Conselhobiblico* - Conselho Bíblico
┃ 🗣️ *${prefix}Simi* - Falar com Assistente Virtual
┃ 🔍 *${prefix}Perfil* - Verificar Perfil
┃ ➕ *${prefix}Calcular* - Realizar Cálculo (Ex: 10 + 10)
┃ 🖋️ *${prefix}Fazernick* - Criar Nickname Personalizado
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
`;
};

exports.menuadm = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🔒 𝐌𝐄𝐍𝐔 - 𝐀𝐃𝐌𝐈𝐍𝐒 ━━━━┓
┃
┃ 🚫 **Controle de Conteúdo**:
┃ ✰ *${prefix}Antiimg (1/0)* - Bloquear Imagens
┃ ✰ *${prefix}Antivideo (1/0)* - Bloquear Vídeos
┃ ✰ *${prefix}Antiaudio (1/0)* - Bloquear Áudios
┃ ✰ *${prefix}Antisticker (1/0)* - Bloquear Figurinhas
┃ ✰ *${prefix}Antiloc (1/0)* - Bloquear Localizações
┃ ✰ *${prefix}Anticontato (1/0)* - Bloquear Contatos
┃ ✰ *${prefix}Antidoc (1/0)* - Bloquear Documentos
┃ ✰ *${prefix}Antilinkgp (1/0)* - Bloquear Links de Grupos
┃ ✰ *${prefix}Antilinkhard (1/0)* - Bloquear Links Explícitos
┃ ✰ *${prefix}Antifake (1/0)* - Bloquear Números Fakes
┃ ✰ *${prefix}Antinotas (1/0)* - Bloquear Notas de Voz
┃ ✰ *${prefix}Anticatalogo (1/0)* - Bloquear Catálogos
┃ ✰ *${prefix}Antipalavrao (1/0)* - Bloquear Palavrões
┃ ✰ *${prefix}Limitecaracteres (1/0)* - Limitar Caracteres
┃
┃ 👋 **Boas-Vindas & Saídas**:
┃ ✰ *${prefix}Bemvindo (1/0)* - Mensagem de Boas-Vindas
┃ ✰ *${prefix}Bemvindo2 (1/0)* - Mensagem de Boas-Vindas Alternativa
┃ ✰ *${prefix}Legendabv (Texto)* - Texto de Boas-Vindas
┃ ✰ *${prefix}Legendasaiu (Texto)* - Texto de Saída
┃ ✰ *${prefix}Legendabv2 (Texto)* - Boas-Vindas Alternativa
┃ ✰ *${prefix}Legendasaiu2 (Texto)* - Saída Alternativa
┃
┃ 🤖 **Funções Automáticas**:
┃ ✰ *${prefix}Simih (1/0)* - Resposta Automática (Simi)
┃ ✰ *${prefix}Simih2 (1/0)* - Resposta Automática Alternativa
┃ ✰ *${prefix}Autosticker (1/0)* - Criar Stickers Automáticos
┃ ✰ *${prefix}Autorepo (1/0)* - Resposta Automática
┃ ✰ *${prefix}Leveling (1/0)* - Sistema de Nível
┃ ✰ *${prefix}Modonsfw (1/0)* - Ativar Modo NSFW
┃ ✰ *${prefix}Odelete (1/0)* - Deletar Mensagens de Administradores
┃ ✰ *${prefix}x9visuunica (1/0)* - Notificar Visualização Única
┃ ✰ *${prefix}x9 (1/0)* - Notificar Mencionados
┃
┃ ✍️ **Legendas e Mensagens**:
┃ ✰ *${prefix}Legenda_imagem (Texto)* - Definir Legenda para Imagens
┃ ✰ *${prefix}Legenda_video (Texto)* - Definir Legenda para Vídeos
┃ ✰ *${prefix}Legenda_estrangeiro (Texto)* - Legenda para Conteúdos Estrangeiros
┃
┃ ⚙️ **Gerenciamento de Prefixos**:
┃ ✰ *${prefix}Multiprefixo (1/0)* - Ativar Múltiplos Prefixos
┃ ✰ *${prefix}Add_prefixo* - Adicionar Novo Prefixo
┃ ✰ *${prefix}Tirar_prefixo* - Remover Prefixo
┃
┃ 🚫 **Gerenciamento de Usuários**:
┃ ✰ *${prefix}Banghost* - Banir Usuário Inativo
┃ ✰ *${prefix}Mute (@mencionar)* - Mutar Usuário
┃ ✰ *${prefix}Desmute (@mencionar)* - Desmutar Usuário
┃ ✰ *${prefix}Reviver (Responder-mensagem)* - Reviver Mensagem
┃ ✰ *${prefix}Kick [@]* - Remover Usuário
┃ ✰ *${prefix}Ban (Responder-mensagem)* - Banir Usuário
┃ ✰ *${prefix}Promover [@]* - Promover a Admin
┃ ✰ *${prefix}Rebaixar [@]* - Rebaixar de Admin
┃ ✰ *${prefix}So_adm* - Somente Admins Podem Usar o Bot
┃ ✰ *${prefix}Listanegra (Número)* - Adicionar à Lista Negra
┃ ✰ *${prefix}Tirardalista (Número)* - Remover da Lista Negra
┃ ✰ *${prefix}ListanegraG (Número)* - Adicionar Grupo à Lista Negra
┃ ✰ *${prefix}TirardalistaG (Número)* - Remover Grupo da Lista Negra
┃
┃ 🛠️ **Configurações de Grupo**:
┃ ✰ *${prefix}Changegroup (all/adms)* - Configurar Grupo (Todos/Admins)
┃ ✰ *${prefix}Rmphotogp* - Remover Foto do Grupo
┃ ✰ *${prefix}Ephemeral [1/0]* - Ativar Mensagens Temporárias
┃ ✰ *${prefix}Descgp (Texto)* - Alterar Descrição do Grupo
┃ ✰ *${prefix}Nomegp (Nome)* - Alterar Nome do Grupo
┃ ✰ *${prefix}Grupo (f/a)* - Fechar/Abrir Grupo
┃ ✰ *${prefix}Status* - Status do Grupo
┃ ✰ *${prefix}Limpar* - Limpar Mensagens Invisíveis do Grupo
┃ ✰ *${prefix}Atividades* - Ver Atividades do Grupo
┃ ✰ *${prefix}Linkgp* - Obter Link do Grupo
┃ ✰ *${prefix}Grupoinfo* - Informações do Grupo
┃
┃ 🔔 **Marcações e Alertas**:
┃ ✰ *${prefix}Totag* - Marcar Algo no Grupo
┃ ✰ *${prefix}Hidetag (txt)* - Marcar com Mensagem Oculta
┃ ✰ *${prefix}Marcar* - Marcar Todos os Membros
┃ ✰ *${prefix}Marcar2* - Marcar Todos (com link wa.me)
┃
┃ 📝 **Outros Comandos**:
┃ ✰ *${prefix}Anagrama (1/0)* - Ativar Jogo do Anagrama
┃ ✰ *${prefix}Antipalavra (1/0)* - Bloquear Palavras
┃ ✰ *${prefix}Criartabela (Escreva-algo)* - Criar Tabela
┃ ✰ *${prefix}Tabelagp* - Ver Tabela do Grupo
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
`;
};

exports.menudono = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🔒 𝐌𝐄𝐍𝐔 - 𝐀𝐃𝐌𝐈𝐍𝐒 ━━━━┓
┃
┃ 🛠️ **Configurações do Bot**:
┃ ✰ *${prefix}Configurar-bot* - Configurar o Bot
┃ ✰ *${prefix}Console* - Acessar o Console do Bot
┃ ✰ *${prefix}Botoff* - Desligar o Bot
┃ ✰ *${prefix}Boton* - Ligar o Bot
┃ ✰ *${prefix}Fotobot* - Definir Foto do Bot (marcar imagem)
┃ ✰ *${prefix}Setprefix (prefixo-novo)* - Alterar Prefixo do Bot
┃ ✰ *${prefix}Audio-menu* - Menu de Áudios
┃ ✰ *${prefix}Verificado-global* - Verificar Status Global
┃
┃ 👥 **Gerenciamento de Grupo**:
┃ ✰ *${prefix}Listagp* - Ver Grupos do Bot
┃ ✰ *${prefix}Bangp* - Banir Grupo
┃ ✰ *${prefix}Unbangp* - Desbanir Grupo
┃ ✰ *${prefix}Descriçãogp (digite-algo)* - Alterar Descrição do Grupo
┃ ✰ *${prefix}Fotomenu (MARCAR-IMG)* - Atualizar Foto do Menu
┃ ✰ *${prefix}Bcgp* - Enviar Transmissão para Grupo
┃
┃ 🚫 **Controle de Comandos**:
┃ ✰ *${prefix}Blockcmd (cmd)* - Bloquear Comando Específico
┃ ✰ *${prefix}Unblockcmd (cmd)* - Desbloquear Comando Específico
┃ ✰ *${prefix}Block [@]* - Bloquear Usuário de Usar Comandos
┃ ✰ *${prefix}Unblock [@]* - Desbloquear Usuário de Usar Comandos
┃
┃ 💸 **Gerenciamento Financeiro**:
┃ ✰ *${prefix}Vercarteira* - Ver Saldo na Carteira
┃ ✰ *${prefix}Saldo* - Ver Saldo Atual
┃ ✰ *${prefix}Transferir* - Transferir Saldo
┃
┃ 🎮 **Jogos & Palavras**:
┃ ✰ *${prefix}Rmpalavra_forca (palavra)* - Remover Palavra da Forca
┃ ✰ *${prefix}Addpalavras_forca (titulo|tema|dica)* - Adicionar Palavra à Forca
┃ ✰ *${prefix}Antipalavrão (1/0)* - Ativar Bloqueio de Palavrões
┃ ✰ *${prefix}Addpalavra (palavrão)* - Adicionar Palavra Proibida
┃ ✰ *${prefix}Delpalavra (palavrão)* - Remover Palavra Proibida
┃ ✰ *${prefix}Antiligar (1/0)* - Bloquear Ligações
┃ ✰ *${prefix}Antipalavra (1/0)* - Bloquear Palavras
┃ ✰ *${prefix}Addpremium @(marca)* - Tornar Usuário Premium
┃ ✰ *${prefix}Delpremium @(marca)* - Remover Premium do Usuário
┃ ✰ *${prefix}Serpremium* - Tornar-se Premium
┃
┃ 💬 **Mensagens Automáticas**:
┃ ✰ *${prefix}Fundobemvindo (marcar-img)* - Definir Fundo de Boas-Vindas
┃ ✰ *${prefix}Fundosaiu (marcar-img)* - Definir Fundo de Saída
┃ ✰ *${prefix}Fazertm (Texto)* - Criar Transmissão
┃ ✰ *${prefix}Rgtm* - Registrar Transmissão
┃ ✰ *${prefix}Tirardatm* - Remover da Lista de Transmissão
┃ ✰ *${prefix}Listatm* - Ver Lista de Transmissão
┃ ✰ *${prefix}Visualizarmsg* - Ver Mensagens Não Lidas
┃ ✰ *${prefix}Ausente (fale-oq-faz)* - Definir Status de Ausente
┃
┃ 👥 **Administração de Membros**:
┃ ✰ *${prefix}Privphotobot* - Privar Foto do Bot
┃ ✰ *${prefix}Clonar [@]* - Clonar Foto de Perfil de Usuário
┃ ✰ *${prefix}Kick [@]* - Remover Usuário do Grupo
┃ ✰ *${prefix}Addpremium @(marca)* - Adicionar Usuário Premium
┃ ✰ *${prefix}Delpremium @(marca)* - Remover Usuário Premium
┃ ✰ *${prefix}Mute (@mencionar)* - Mutar Usuário
┃ ✰ *${prefix}Desmute (@mencionar)* - Desmutar Usuário
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

`;
};

exports.menulogos = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `​

┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🖼️ 𝐌𝐄𝐍𝐔 - 𝐋𝐎𝐆𝐎𝐒 ━━━━┓
┃
┃ 🎥 **Logos de Vídeo**:
┃ ✰ *${prefix}Pubgv (Texto)* - Estilo PUBG
┃ ✰ *${prefix}Natalmsg (Texto)* - Mensagem de Natal
┃ ✰ *${prefix}Anonovo (Texto)* - Mensagem de Ano Novo
┃ ✰ *${prefix}Trigrev (Texto)* - Efeito Trigravidade
┃
┃ ✨ **Logos com 1 Texto**:
┃ ✰ *${prefix}Glue (Texto)* - Estilo Cola
┃ ✰ *${prefix}Dark (Texto)* - Estilo Sombrio
┃ ✰ *${prefix}Galaxystyle (Texto)* - Estilo Galáxia
┃ ✰ *${prefix}Minion (Texto)* - Estilo Minion
┃ ✰ *${prefix}Horrorgift (Texto)* - Estilo Horror
┃ ✰ *${prefix}Holographic (Texto)* - Holográfico
┃ ✰ *${prefix}Deluxe (Texto)* - Estilo Deluxe
┃ ✰ *${prefix}Glossyblue (Texto)* - Azul Brilhante
┃ ✰ *${prefix}Deluxegold (Texto)* - Ouro Deluxe
┃ ✰ *${prefix}Glossycarbon (Texto)* - Carbono Brilhante
┃ ✰ *${prefix}Fabric (Texto)* - Estilo Tecido
┃ ✰ *${prefix}Watercolor (Texto)* - Aquarela
┃ ✰ *${prefix}1917 (Texto)* - Estilo Clássico
┃ ✰ *${prefix}Multicolor (Texto)* - Multicolorido
┃ ✰ *${prefix}Generator (Texto)* - Estilo Gerador
┃ ✰ *${prefix}Wonderful (Texto)* - Maravilhoso
┃ ✰ *${prefix}Holiday (Texto)* - Feriado
┃ ✰ *${prefix}Technology (Texto)* - Estilo Tecnologia
┃ ✰ *${prefix}Winter (Texto)* - Estilo Inverno
┃ ✰ *${prefix}Neontext (Texto)* - Texto Neon
┃ ✰ *${prefix}Halloweenfire (Texto)* - Fogo de Halloween
┃ ✰ *${prefix}Metaldark (Texto)* - Metal Sombrio
┃ ✰ *${prefix}Darkgold (Texto)* - Ouro Escuro
┃ ✰ *${prefix}Wicker (Texto)* - Vime
┃ ✰ *${prefix}Firework (Texto)* - Fogos de Artifício
┃ ✰ *${prefix}Steeltext (Texto)* - Texto de Aço
┃ ✰ *${prefix}Goldfoil (Texto)* - Folha de Ouro
┃ ✰ *${prefix}Ultragloss (Texto)* - Ultra Brilhante
┃ ✰ *${prefix}Denimtext (Texto)* - Estilo Jeans
┃ ✰ *${prefix}Stargreen (Texto)* - Estrela Verde
┃ ✰ *${prefix}Captain (Texto)* - Capitão
┃ ✰ *${prefix}Toxic (Texto)* - Tóxico
┃ ✰ *${prefix}Ninjalogo (Texto)* - Logo Ninja
┃ ✰ *${prefix}Txtquadrinhos (Texto)* - Estilo Quadrinhos
┃ ✰ *${prefix}HackNeon (Texto)* - Neon Hacker
┃ ✰ *${prefix}EquipeMascote (Texto)* - Equipe Mascote
┃ ✰ *${prefix}FFavatar (Texto)* - Avatar Free Fire
┃ ✰ *${prefix}Gizquadro (Texto)* - Estilo Quadro de Giz
┃ ✰ *${prefix}Angelglx (Texto)* - Anjo Galáxia
┃ ✰ *${prefix}WingEffect (Texto)* - Efeito de Asas
┃ ✰ *${prefix}Angelwing (Texto)* - Asas de Anjo
┃ ✰ *${prefix}Blackpink (Texto)* - Estilo Blackpink
┃ ✰ *${prefix}Girlmascote (Texto)* - Mascote Feminina
┃ ✰ *${prefix}Mascotegame (Texto)* - Mascote de Game
┃ ✰ *${prefix}Fpsmascote (Texto)* - Mascote FPS
┃ ✰ *${prefix}Logogame (Texto)* - Logo de Game
┃ ✰ *${prefix}Glitch2 (Texto)* - Estilo Glitch
┃ ✰ *${prefix}3DGold (Texto)* - Ouro 3D
┃ ✰ *${prefix}Placaloli (Texto)* - Placa Loli
┃ ✰ *${prefix}Phadow (Texto)* - Sombra
┃ ✰ *${prefix}Efeitoneon (Texto)* - Efeito Neon
┃ ✰ *${prefix}Cemiterio (Texto)* - Estilo Cemitério
┃ ✰ *${prefix}Metalgold (Texto)* - Metal Dourado
┃ ✰ *${prefix}Narutologo (Texto)* - Logo Naruto
┃ ✰ *${prefix}Fire (Texto)* - Fogo
┃ ✰ *${prefix}Romantic (Texto)* - Romântico
┃ ✰ *${prefix}Smoke (Texto)* - Fumaça
┃ ✰ *${prefix}Papel (Texto)* - Estilo Papel
┃ ✰ *${prefix}Lovemsg (Texto)* - Mensagem de Amor 1
┃ ✰ *${prefix}Lovemsg2 (Texto)* - Mensagem de Amor 2
┃ ✰ *${prefix}Lovemsg3 (Texto)* - Mensagem de Amor 3
┃ ✰ *${prefix}Coffecup (Texto)* - Xícara de Café
┃ ✰ *${prefix}Coffecup2 (Texto)* - Xícara de Café 2
┃ ✰ *${prefix}Cup (Texto)* - Estilo Copo
┃ ✰ *${prefix}Florwooden (Texto)* - Madeira Flor
┃ ✰ *${prefix}Lobometal (Texto)* - Lobo Metálico
┃ ✰ *${prefix}Harryp (Texto)* - Harry Potter
┃ ✰ *${prefix}Txtborboleta (Texto)* - Texto Borboleta
┃ ✰ *${prefix}Madeira (Texto)* - Estilo Madeira
┃ ✰ *${prefix}Pornhub (Texto)* - Estilo Pornhub
┃ ✰ *${prefix}Escudo (Texto)* - Escudo
┃ ✰ *${prefix}Transformer (Texto)* - Estilo Transformer
┃ ✰ *${prefix}America (Texto)* - Estilo América
┃ ✰ *${prefix}Demongreen (Texto)* - Demônio Verde
┃ ✰ *${prefix}Wetglass (Texto)* - Vidro Molhado
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛`
};

exports.alteradores = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🎵 𝐀𝐋𝐓𝐄𝐑𝐀𝐑 - 𝐀𝐔𝐃𝐈𝐎 ━━━━┓
┃
┃ 🎙️ **Efeitos de Voz**:
┃ ✰ *${prefix}Audiolento (marca)* - Tornar o áudio mais lento
┃ ✰ *${prefix}Audiorapido (marca)* - Acelerar o áudio
┃ ✰ *${prefix}Grave (marca)* - Aprofundar a voz
┃ ✰ *${prefix}Grave2 (marca)* - Versão alternativa de voz grave
┃ ✰ *${prefix}Esquilo (marca)* - Voz de esquilo
┃ ✰ *${prefix}Estourar (marca)* - Efeito de áudio estourado
┃ ✰ *${prefix}Bass (marca)* - Adicionar grave ao áudio
┃ ✰ *${prefix}Bass2 (marca)* - Versão alternativa de grave
┃ ✰ *${prefix}Vozmenino (marca)* - Alterar para voz de menino
┃ ✰ *${prefix}Vibrato (marca)* - Adicionar efeito vibrato
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛
`;
};

exports.menuprem = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 💎 𝐌𝐄𝐍𝐔 - 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ━━━━┓
┃
┃ 🔐 **Destravas e Travamentos**:
┃ ✰ *${prefix}Destrava* - Ativar destravamento
┃ ✰ *${prefix}Destrava2* - Ativar destravamento alternativo
┃ ✰ *${prefix}trava* - Comando de travazap
┃
┃ 📅 **Datas e Informações**:
┃ ✰ *${prefix}feriados2* - Consultar feriados
┃ ✰ *${prefix}anoschegar* - Anos até determinada data
┃
┃ 💵 **Geradores e Encurtadores**:
┃ ✰ *${prefix}GerarCPF* - Gerar CPF aleatório
┃ ✰ *${prefix}Encurtalink3 (Link)* - Encurtar um link
┃
┃ 📱 **Consultas de Informações**:
┃ ✰ *${prefix}Ddd (DDD)* - Consultar informações de DDD
┃ ✰ *${prefix}Celular (Nome)* - Consultar informações de um celular
┃
┃ 🖼️ **Criação de Logos**:
┃ ✰ *${prefix}logo1* a *${prefix}logo11* - Criar logos com diferentes estilos
┃
┃ 📜 **Outros**:
┃ ✰ *${prefix}PremiumList* - Ver a lista de recursos premium
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🔍 𝐌𝐄𝐍𝐔 - 𝐂𝐎𝐍𝐒𝐔𝐋𝐓𝐀𝐒 ━━━━┓
┃
┃ 📋 **Consultas de Documentos**:
┃ ✰ *${prefix}cpf* a *${prefix}cpf4* - Consultar CPF
┃ ✰ *${prefix}cns* - Consultar CNS
┃ ✰ *${prefix}cnpj* a *${prefix}cnpj2* - Consultar CNPJ
┃ ✰ *${prefix}rg* - Consultar RG
┃ ✰ *${prefix}inss* - Consultar INSS
┃ ✰ *${prefix}beneficios* - Consultar benefícios
┃
┃ 📍 **Consultas de Localização**:
┃ ✰ *${prefix}cep* - Consultar CEP
┃ ✰ *${prefix}placa* a *${prefix}placa2* - Consultar placa de veículo
┃ ✰ *${prefix}vizinhos* - Consultar informações sobre vizinhos
┃ ✰ *${prefix}moradores* - Consultar moradores
┃ ✰ *${prefix}site* - Consultar informações de um site
┃
┃ 📱 **Consultas de Telefone**:
┃ ✰ *${prefix}tel1* a *${prefix}tel3* - Consultar telefone
┃ ✰ *${prefix}score* - Consultar score do telefone
┃
┃ 👨‍👩‍👧 **Consultas de Parentes**:
┃ ✰ *${prefix}nome* a *${prefix}nome2* - Consultar nome
┃ ✰ *${prefix}parentes* - Consultar parentes
┃ ✰ *${prefix}mae* - Consultar informações da mãe
┃ ✰ *${prefix}pai* - Consultar informações do pai
┃
┃ 💳 **Consultas de Financeiras e Bancárias**:
┃ ✰ *${prefix}bin* - Consultar BIN de cartão
┃ ✰ *${prefix}bank* - Consultar banco
┃ ✰ *${prefix}chkgg* - Verificar se cheque está disponível
┃
┃ 🌐 **Outras Consultas**:
┃ ✰ *${prefix}email* - Consultar informações de um email
┃ ✰ *${prefix}ip* - Consultar informações de um IP
┃ ✰ *${prefix}chassi* - Consultar informações do chassi de veículo
┃ ✰ *${prefix}vacina* - Consultar informações de vacina
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

`;
};

exports.menurpg = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🏹 𝐌𝐄𝐍𝐔 - 𝐑𝐏𝐆 ━━━━┓
┃
┃ 🏡 **Família e Empresas**:
┃ ✰ *${prefix}criarfamilia* - Criar uma nova família
┃ ✰ *${prefix}vertodasfamilia* - Ver todas as famílias
┃ ✰ *${prefix}addfamilia* - Adicionar membro à família
┃ ✰ *${prefix}sairfamilia* - Sair da família
┃ ✰ *${prefix}verfamilia* - Ver informações da família
┃ ✰ *${prefix}criarempresa* - Criar uma nova empresa
┃ ✰ *${prefix}verempresa* - Ver informações da empresa
┃ ✰ *${prefix}adicionarproduto* - Adicionar produto à empresa
┃ ✰ *${prefix}venderproduto* - Vender produto da empresa
┃ ✰ *${prefix}venderempresa* - Vender a empresa
┃ ✰ *${prefix}vertodasempresas* - Ver todas as empresas
┃
┃ 💰 **Trabalho e Investimentos**:
┃ ✰ *${prefix}trabalhar* - Trabalhar e ganhar dinheiro
┃ ✰ *${prefix}investir* - Investir seu dinheiro
┃ ✰ *${prefix}comprarvip* - Comprar status VIP
┃ ✰ *${prefix}loteria* - Jogar na loteria
┃ ✰ *${prefix}apostarespostes* - Apostar em esportes
┃
┃ ⚔️ **Atividades de Risco**:
┃ ✰ *${prefix}roubarbanco* - Roubar um banco
┃ ✰ *${prefix}assaltar (@marcar)* - Assaltar outro jogador
┃ ✰ *${prefix}retirar* - Retirar dinheiro (após ser preso)
┃ ✰ *${prefix}venderarma* - Vender uma arma
┃ ✰ *${prefix}cassino (valor da aposta)* - Apostar no cassino
┃ ✰ *${prefix}1xbcbets (valor da aposta)* - Apostar em 1xBet
┃ ✰ *${prefix}tigrinho* - Apostar no tigrinho
┃
┃ 🏹 **Armas e Ferramentas**:
┃ ✰ *${prefix}arma* - Comprar uma arma
┃ ✰ *${prefix}venderarma* - Vender uma arma
┃ ✰ *${prefix}minerardiamante* - Minerar diamantes
┃ ✰ *${prefix}venderdiamante* - Vender diamantes
┃ ✰ *${prefix}minerar* - Minerar recursos
┃
┃ 🐴 **Animais e Itens de RPG**:
┃ ✰ *${prefix}Lojadecavalos* - Loja de cavalos
┃ ✰ *${prefix}Estabulo* - Informações sobre seus cavalos
┃ ✰ *${prefix}Lojadegalos* - Loja de galos
┃ ✰ *${prefix}Galos* - Informações sobre seus galos
┃ ✰ *${prefix}Galinheiro* - Informações sobre suas galinhas
┃ ✰ *${prefix}cruzargg* - Cruzar animais (galinhas, cavalos, etc)
┃
┃ 🎲 **Jogos e Apostas**:
┃ ✰ *${prefix}dadoapostado (dado/valor da aposta)* - Jogar dado apostado
┃ ✰ *${prefix}caracoroa (lado/valor da aposta)* - Cara ou coroa
┃ ✰ *${prefix}churrasqueira* - Comprar uma churrasqueira
┃ ✰ *${prefix}venderchurrasqueira* - Vender churrasqueira
┃ ✰ *${prefix}pescaria* - Ir pescar
┃ ✰ *${prefix}itenspesca* - Comprar itens para pesca
┃
┃ 💳 **Bancos e Transações**:
┃ ✰ *${prefix}minhacarteira* - Ver informações bancárias
┃ ✰ *${prefix}fazerpix (número/valor)* - Fazer um Pix
┃ ✰ *${prefix}chavepix (@marcar o usuário)* - Ver chave Pix de alguém
┃ ✰ *${prefix}meupix* - Ver sua chave Pix na *Base da Ets*
┃ ✰ *${prefix}trocarbanco* - Trocar de banco
┃
┃ 🌟 **Modo RPG**:
┃ ✰ *${prefix}modorpg (1/0)* - Ativar/Desativar modo RPG no grupo
┃ ✰ *${prefix}rpglistgp* - Ver lista de registrados na *Base da Ets* no grupo
┃ ✰ *${prefix}rgbe (Nome)* - Registrar-se na *Base da Ets*
┃ ✰ *${prefix}sairme* - Apagar seus registros
┃ ✰ *${prefix}meube* - Ver suas informações na *Base da Ets*
┃ ✰ *${prefix}rankbe* - Ver os 10 mais ricos da *Base da Ets*
┃ ✰ *${prefix}codelist* - Lista de Códigos GiftCards
┃ ✰ *${prefix}resgatargf (code)* - Resgatar GiftCard
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

`;
};


exports.menufsl = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🎮 𝐌𝐄𝐍𝐔 - 𝐉𝐎𝐆𝐎𝐒 ━━━━┓
┃
┃ ✰ *${prefix}jogo1* - Nome do Jogo 1
┃ ✰ *${prefix}jogo2* - Nome do Jogo 2
┃ ✰ *${prefix}jogo3* - Nome do Jogo 3
┃ ✰ *${prefix}jogo4* - Nome do Jogo 4
┃ ✰ *${prefix}jogo5* - Nome do Jogo 5
┃ ✰ *${prefix}jogo6* - Nome do Jogo 6
┃ ✰ *${prefix}jogo7* - Nome do Jogo 7
┃ ✰ *${prefix}jogo8* - Nome do Jogo 8
┃ ✰ *${prefix}jogo9* - Nome do Jogo 9
┃ ✰ *${prefix}jogo10* - Nome do Jogo 10
┃ ✰ *${prefix}jogo11* - Nome do Jogo 11
┃ ✰ *${prefix}jogo12* - Nome do Jogo 12
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🎥 𝐌𝐄𝐍𝐔 - 𝐒𝐄𝐑𝐈𝐄𝐒 ━━━━┓
┃
┃ ✰ *${prefix}serie1* - Nome da Série 1
┃ ✰ *${prefix}serie2* - Nome da Série 2
┃ ✰ *${prefix}serie3* - Nome da Série 3
┃ ✰ *${prefix}serie4* - Nome da Série 4
┃ ✰ *${prefix}serie5* - Nome da Série 5
┃ ✰ *${prefix}serie6* - Nome da Série 6
┃ ✰ *${prefix}serie7* - Nome da Série 7
┃ ✰ *${prefix}serie8* - Nome da Série 8
┃ ✰ *${prefix}serie9* - Nome da Série 9
┃ ✰ *${prefix}serie10* - Nome da Série 10
┃ ✰ *${prefix}serie11* - Nome da Série 11
┃ ✰ *${prefix}serie12* - Nome da Série 12
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🍿 𝐌𝐄𝐍𝐔 - 𝐅𝐈𝐋𝐌𝐄𝐒 ━━━━┓
┃
┃ ✰ *${prefix}filme1* - Nome do Filme 1
┃ ✰ *${prefix}filme2* - Nome do Filme 2
┃ ✰ *${prefix}filme3* - Nome do Filme 3
┃ ✰ *${prefix}filme4* - Nome do Filme 4
┃ ✰ *${prefix}filme5* - Nome do Filme 5
┃ ✰ *${prefix}filme6* - Nome do Filme 6
┃ ✰ *${prefix}filme7* - Nome do Filme 7
┃ ✰ *${prefix}filme8* - Nome do Filme 8
┃ ✰ *${prefix}filme9* - Nome do Filme 9
┃ ✰ *${prefix}filme10* - Nome do Filme 10
┃ ✰ *${prefix}filme11* - Nome do Filme 11
┃ ✰ *${prefix}filme12* - Nome do Filme 12
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 📱 𝐌𝐄𝐍𝐔 - 𝐀𝐏𝐏'𝐒 ━━━━┓
┃
┃ ✰ *${prefix}app1* - Nome do App 1
┃ ✰ *${prefix}app2* - Nome do App 2
┃ ✰ *${prefix}app3* - Nome do App 3
┃ ✰ *${prefix}app4* - Nome do App 4
┃ ✰ *${prefix}app5* - Nome do App 5
┃ ✰ *${prefix}app6* - Nome do App 6
┃ ✰ *${prefix}app7* - Nome do App 7
┃ ✰ *${prefix}app8* - Nome do App 8
┃ ✰ *${prefix}app9* - Nome do App 9
┃ ✰ *${prefix}app10* - Nome do App 10
┃ ✰ *${prefix}app11* - Nome do App 11
┃ ✰ *${prefix}app12* - Nome do App 12
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 📚 𝐌𝐄𝐍𝐔 - 𝐋𝐈𝐕𝐑𝐎𝐒 ━━━━┓
┃
┃ ✰ *${prefix}livro1* - Nome do Livro 1
┃ ✰ *${prefix}livro2* - Nome do Livro 2
┃ ✰ *${prefix}livro3* - Nome do Livro 3
┃ ✰ *${prefix}livro4* - Nome do Livro 4
┃ ✰ *${prefix}livro5* - Nome do Livro 5
┃ ✰ *${prefix}livro6* - Nome do Livro 6
┃ ✰ *${prefix}livro7* - Nome do Livro 7
┃ ✰ *${prefix}livro8* - Nome do Livro 8
┃ ✰ *${prefix}livro9* - Nome do Livro 9
┃ ✰ *${prefix}livro10* - Nome do Livro 10
┃ ✰ *${prefix}livro11* - Nome do Livro 11
┃ ✰ *${prefix}livro12* - Nome do Livro 12
┃ ✰ *${prefix}livro13* - Nome do Livro 13
┃ ✰ *${prefix}livro14* - Nome do Livro 14
┃ ✰ *${prefix}livro15* - Nome do Livro 15
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

`;
};


exports.brincadeiras = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
╭═══════════════════ ⪩
╰╮き⃟✰𝐈𝐍𝐅𝐎-𝐁𝐎𝐓/𝐔𝐒𝐄𝐑❈⃟き
╭┤✰ ⋟  Bot: *${NomeDoBot}*
┃│✰ ⋟  Usuário: *@${sender.split("@")[0]}*
┃│✰ ⋟  Minha Versão: *${packname.version}*
┃│✰ ⋟  Dono: *${NickDono}*
┃│✰ ⋟  Status: *Online*
╰━━━━━━━━•𖧹ٜ⛩ٜ𖧹•━━━━━━━━━╯

╭━━━━━━━━𖧹ٜ⛩ٜ𖧹•━━━━━━━━━╮
│ 女⃟⃟女𝐌𝐄𝐍𝐔 - 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒女⃟⃟女
╰━━━━━━━━𖧹ٜ⛩ٜ𖧹•━━━━━━━━━╯
╭═══════════════════ ⪩
┃ **Interações Diretas:**
┃ ✰ ⋟ ${prefix}Gay (marca (@))
┃ ✰ ⋟ ${prefix}Feio (marca (@))
┃ ✰ ⋟ ${prefix}Corno (marca (@))
┃ ✰ ⋟ ${prefix}Vesgo (marca (@))
┃ ✰ ⋟ ${prefix}Bebado (marca (@))
┃ ✰ ⋟ ${prefix}Gostoso (marca (@))
┃ ✰ ⋟ ${prefix}Gostosa (marca (@))
┃ ✰ ⋟ ${prefix}Beijo (marca (@))
┃ ✰ ⋟ ${prefix}Matar (marca (@))
┃ ✰ ⋟ ${prefix}Tapa (marca (@))
┃ ✰ ⋟ ${prefix}Chute (marca (@))
┃ ✰ ⋟ ${prefix}Dogolpe (marca (@))
┃ ✰ ⋟ ${prefix}Nazista (marca (@))
┃
┃ **Rankings Divertidos:**
┃ ✰ ⋟ ${prefix}Rankgay (5 gays)
┃ ✰ ⋟ ${prefix}Rankgado (5 gados)
┃ ✰ ⋟ ${prefix}Rankcorno (5 cornos)
┃ ✰ ⋟ ${prefix}Rankgostoso (5 gostosos)
┃ ✰ ⋟ ${prefix}Rankgostosa (5 gostosas)
┃ ✰ ⋟ ${prefix}Ranknazista (5 nazistas)
┃ ✰ ⋟ ${prefix}Rankotakus (5 otakus)
┃ ✰ ⋟ ${prefix}Rankpau (5 pauzudos)
┃ ✰ ⋟ ${prefix}Rankcu
┃ ✰ ⋟ ${prefix}Rankbi
┃ ✰ ⋟ ${prefix}Rankbv
┃
┃ **Outras Brincadeiras:**
┃ ✰ ⋟ ${prefix}vab (Você prefere?)
┃ ✰ ⋟ ${prefix}Chance (fale algo)
┃ ✰ ⋟ ${prefix}Casal (Casal do grupo)
┃ ✰ ⋟ ${prefix}Mencionar (fale algo)
┃ ✰ ⋟ ${prefix}pau
┃ ✰ ⋟ ${prefix}mago
┃ ✰ ⋟ ${prefix}maquina
┃ ✰ ⋟ ${prefix}samurai
┃ ✰ ⋟ ${prefix}socar
┃ ✰ ⋟ ${prefix}musturbarele
┃ ✰ ⋟ ${prefix}masturbae
┃ ✰ ⋟ ${prefix}mamadadele
┃ ✰ ⋟ ${prefix}magico
┃ ✰ ⋟ ${prefix}espiao
┃ ✰ ⋟ ${prefix}sexo
┃ ✰ ⋟ ${prefix}boquete
┃ ✰ ⋟ ${prefix}branco
┃ ✰ ⋟ ${prefix}branca
┃ ✰ ⋟ ${prefix}inteligente
╰━━━━━━━━𖧹ٜ⛩ٜ𖧹•━━━━━━━━━╯

`;
};

exports.menusc = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 📡 𝐌𝐄𝐍𝐔 - 𝐒𝐂𝐑𝐀𝐏𝐄𝐑 ━━━━┓
┃
┃ ✰ *${prefix}g1* - Scrape informações do portal G1.
┃ ✰ *${prefix}cnn* - Obtenha dados da CNN.
┃ ✰ *${prefix}uol* - Extraia informações do UOL.
┃ ✰ *${prefix}globo* - Informações do portal Globo.
┃ ✰ *${prefix}wikipedia* - Busque informações na Wikipedia.
┃ ✰ *${prefix}google* - Pesquise no Google.
┃ ✰ *${prefix}mercadolivre* - Informações de produto no Mercado Livre.
┃ ✰ *${prefix}amazon* - Dados de produtos da Amazon.
┃ ✰ *${prefix}playstore* - Informações sobre aplicativos na Play Store.
┃ ✰ *${prefix}youtube* - Veja informações de um vídeo do YouTube.
┃ ✰ *${prefix}anime* - Informações sobre animes.
┃ ✰ *${prefix}pensador* - Frases do Pensador.
┃ ✰ *${prefix}noticiatempo* - Notícias sobre clima.
┃ ✰ *${prefix}print* - Captura de tela de site.
┃ ✰ *${prefix}techtudo* - Notícias do TechTudo.
┃ ✰ *${prefix}nba* - Notícias do NBA.
┃ ✰ *${prefix}jovempan* - Últimas novidades da Jovem Pan.
┃ ✰ *${prefix}sbt* - Últimas novidades do SBT.
┃ ✰ *${prefix}xvideos* - Pesquisa no site adulto.
┃ ✰ *${prefix}mediafire* - Informações do MediaFire.
┃ ✰ *${prefix}gato* - Ver raça de algum gato.
┃ ✰ *${prefix}gemini* - IA ajudante.
┃ ✰ *${prefix}rooh* - IA do Rooh.
┃ ✰ *${prefix}mandarcss* - Envia um código CSS.
┃ ✰ *${prefix}internacional* - Notícias internacionais.
┃ ✰ *${prefix}portalzacarias* - Últimas notícias do Portal Zacarias.
┃ ✰ *${prefix}wallpaper* - Obter wallpapers.
┃ ✰ *${prefix}teksmods* - Procura app/jogo com hack.
┃ ✰ *${prefix}g1pes* - Pesquisa algo no G1.
┃ ✰ *${prefix}mrcoferta* - Ofertas do Mercado Livre.
┃ ✰ *${prefix}dicionario* - Definições de palavras.
┃ ✰ *${prefix}pokemon* - Dados sobre Pokémon.
┃ ✰ *${prefix}capitais* - Exemplos: capitais da Europa.
┃ ✰ *${prefix}github* - Pesquisa algo no GitHub.
┃ ✰ *${prefix}cinema* - Notícias sobre novos filmes.
┃ ✰ *${prefix}adorocinema* - Dados de algum filme.
┃ ✰ *${prefix}superflix* - Informações do Superflix.
┃ ✰ *${prefix}carro* - Pesquisa sobre marca de carros.
┃ ✰ *${prefix}ringtone* - Pesquisa de áudios (ringtones).
┃ ✰ *${prefix}palavradodia* - Mostra a palavra do dia.
┃ ✰ *${prefix}fsa* - Pesquisa sobre filme.
┃ ✰ *${prefix}localizar* - Localiza algum lugar.
┃ ✰ *${prefix}raca* - Informações sobre raças ou etnias.
┃ ✰ *${prefix}poder360* - Mostra notícias do Poder 360.
┃ ✰ *${prefix}terra* - Notícias do portal Terra.
┃ ✰ *${prefix}metro* - Últimas notícias do metrô.
┃ ✰ *${prefix}aviao* - Últimas notícias sobre aviação.
┃ ✰ *${prefix}wikimedia* - Dados da Wikimedia.
┃ ✰ *${prefix}hentaip* - Hentai aleatório.
┃ ✰ *${prefix}techbusca* - Pesquisa algo no TechTudo.
┃ ✰ *${prefix}npm* - Informações sobre pacotes npm.
┃ ✰ *${prefix}horasem* - Verifica o horário atual em algum lugar.
┃ ✰ *${prefix}playaudio* - Reproduz áudio de música.
┃ ✰ *${prefix}playdoc* - Reproduz documento de música.
┃ ✰ *${prefix}playvideo* - Reproduz vídeo com som.
┃ ✰ *${prefix}playvideom* - Reproduz vídeo sem áudio.
┃ ✰ *${prefix}pesputa* - Pesquisa no site adulto (Puta).
┃ ✰ *${prefix}kid* - Assistente IA que fala.
┃ ✰ *${prefix}versite* - Visualiza um site.
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛`;
};

exports.efeitos = (prefix, NomeDoBot, sender, NickDono, packname) => {
return `
┏━━━━ 🌟 𝑰𝒏𝒇𝒐 𝑩𝒐𝒕/𝑼𝒔𝒖á𝒓𝒊𝒐 🌟 ━━━━┓
┃
┣ 🤖 𝘽𝙤𝙩: *${NomeDoBot}*
┣ 👤 𝙐𝙨𝙪á𝙧𝙞𝙤: *@${sender.split("@")[0]}*
┣ ⚙️ 𝙑𝙚𝙧𝙨ã𝙤: *${packname.version}*
┣ 👑 𝘿𝙤𝙣𝙤: *${NickDono}*
┣ 🟢 𝘚𝙩𝙖𝙩𝙪𝙨: *Online*
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━ 🎨 𝐌𝐄𝐍𝐔 - 𝐃𝐄 𝐄𝐅𝐄𝐈𝐓𝐎𝐒 ━━━━┓
┃
┃ ✰ *${prefix}Comunismo (marcar)* - Efeito de Comunismo na imagem.
┃ ✰ *${prefix}Bolsonaro (marcar)* - Efeito Bolsonaro na imagem.
┃ ✰ *${prefix}Bnw (marcar)* - Efeito preto e branco (Bnw).
┃ ✰ *${prefix}Beautiful (marcar)* - Efeito "Beautiful" na imagem.
┃ ✰ *${prefix}Blur (marcar)* - Efeito de desfoque (Blur).
┃ ✰ *${prefix}Affect (marcar)* - Efeito "Affect" na imagem.
┃ ✰ *${prefix}Del (marcar)* - Efeito "Delete" na imagem.
┃ ✰ *${prefix}Circle (marcar)* - Cria um círculo com a imagem.
┃ ✰ *${prefix}Dither (marcar)* - Efeito de dithering na imagem.
┃ ✰ *${prefix}Facepalm (marcar)* - Efeito "Facepalm" na imagem.
┃ ✰ *${prefix}Invert (marcar)* - Inverte as cores da imagem.
┃ ✰ *${prefix}Lgbt (marcar)* - Efeito arco-íris LGBT na imagem.
┃ ✰ *${prefix}Magik (marcar)* - Efeito "Magik" na imagem.
┃ ✰ *${prefix}Rotate (marcar)* - Rotaciona a imagem.
┃ ✰ *${prefix}Rip (marcar)* - Efeito de lápide (RIP).
┃ ✰ *${prefix}Jail (marcar)* - Efeito de prisão (Jail).
┃ ✰ *${prefix}Trash (marcar)* - Efeito de "Trash" na imagem.
┃ ✰ *${prefix}Pixelate (marcar)* - Aplica efeito de pixelização.
┃ ✰ *${prefix}Sepia (marcar)* - Efeito sépia na imagem.
┃ ✰ *${prefix}Wanted (marcar)* - Efeito "Procurado" (Wanted).
┃ ✰ *${prefix}Wasted (marcar)* - Efeito "Wasted" do GTA.
┃
┗━━━━━━━━━━━━━━━━━━━━━━┛

`;
};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(colors.red(`Modificação detectada: '.${__filename}' - Arquivo Atualizado.`))
    delete require.cache[file]
    require(file)
})
