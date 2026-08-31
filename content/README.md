# Conteúdo do portfólio

Esta pasta é a camada editorial do site. Os componentes de interface apenas leem estes dados.

## Arquivos

- `projects.json`: projetos, ordem, publicação, destaques, imagens, galerias, vídeos e coleções.
- `publications.json`: arquivo de publicações.
- `site.json`: textos institucionais, navegação, metadados, Home, Sobre e Contato.
- `schemas/project.schema.json`: contrato de campos para validação e futura configuração de CMS.

## Publicação de projetos

Cada projeto possui:

- `displayOrder`: controla a ordem no índice e na navegação entre cases;
- `status`: `draft`, `published` ou `archived`;
- `featuredOnHome`: define se o projeto aparece na Home;
- `cardLayout`: `standard` ou `wide`.

Somente itens com `status: "published"` são exibidos. Um projeto novo incluído em `projects.json` entra automaticamente nas rotas, no índice e, se configurado, na Home.

## Assets

Cada projeto possui sua própria pasta em `public/projects/<slug>/`. Use as subpastas `gallery`, `videos` e `catalog` quando forem necessárias. Os caminhos gravados no conteúdo sempre começam com `/projects/<slug>/`.

## CMS Git-based

A camada de conteúdo usa JSON e JSON Schema, sem banco de dados ou API proprietária. Isso permite configurar posteriormente Decap CMS, TinaCMS ou outro editor Git-based para gravar diretamente nestes arquivos e enviar as mudanças ao GitHub. Um commit gerado pelo CMS pode acionar automaticamente uma nova publicação na Vercel.
