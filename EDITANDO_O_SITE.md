# Manutenção do portfólio

O conteúdo e o layout agora são independentes. Projetos, publicações e textos institucionais ficam na pasta `content`; os componentes visuais não contêm informações específicas de projetos.

## O que pode ser mantido sem alterar o layout

- criar, editar, ordenar, ocultar e arquivar projetos;
- escolher quais projetos aparecem na Home;
- trocar capa, imagem de abertura, galeria e vídeos;
- editar categorias, atuação, ano, resumo e suportes;
- atualizar publicações, Sobre, Contato, navegação e metadados.

## Assets

Os arquivos de cada projeto ficam em `public/projects/<slug>/`. O nome da pasta deve ser igual ao `slug` cadastrado no conteúdo.

## Preparação para CMS

O projeto está pronto para receber um CMS Git-based. A configuração futura poderá transformar os campos de `content/projects.json` em um formulário visual, salvar as mudanças no GitHub e acionar uma nova publicação na Vercel.

Essa interface de administração ainda não está instalada: a etapa atual separa e tipa o conteúdo para que o CMS possa ser conectado sem redesenhar ou reestruturar o site.
