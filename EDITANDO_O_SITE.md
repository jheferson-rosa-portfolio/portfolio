# Como editar este portfólio

O site é editável, mas atualmente não possui um painel visual de administração. As alterações são feitas nos arquivos do projeto e depois publicadas novamente.

## Conteúdo dos projetos

Os títulos, anos, categorias, resumos, ordem dos cases, imagens, vídeos e galerias ficam centralizados em `lib/projects.ts`.

- Para mudar a ordem da Home e de Selected Work, mova o projeto dentro da lista `projects`.
- Para atualizar um texto, altere o campo correspondente do projeto.
- Para adicionar imagens a uma galeria, coloque o arquivo em `public/images` e inclua o endereço no campo `gallery`.
- Para inserir um projeto, copie a estrutura de um item existente e preencha apenas informações documentadas.

## Textos institucionais

- Home: `app/page.tsx`
- Sobre: `app/about/page.tsx`
- Contato: `app/contact/page.tsx`
- Publicações: `app/publications/page.tsx`

## Aparência

A paleta, a escala tipográfica, os espaçamentos e os comportamentos responsivos ficam em `app/globals.css`.

## Publicação

Depois de editar, é necessário gerar uma nova versão e publicá-la. Se for importante fazer manutenção sem lidar com arquivos, uma próxima etapa pode conectar o portfólio a um CMS — por exemplo, uma base simples para projetos, textos e contatos — mantendo o mesmo design.
