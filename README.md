# Blog Posts - Desafio Técnico

## Introdução

O projeto consiste em construir uma página de blog funcional e responsiva consumindo alguns endpoints, é exibido uma lista de postagens com título e corpo, também é exibido, ao clicar em um post, mais detalhes sobre o post, como autor e comentários.

## Ferramentas utilizadas

- React
- Redux
- Javascript
- Lint
- Chakra UI
- Axios

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [node](https://nodejs.org/en/download/), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) e [git](https://git-scm.com/downloads) instalados.

Após instalação dos aplicativos acima você deverá clonar o repositório.

```bash
git clone git@github.com:IsaacdAlmeida/desafio-frontend-posts.git
```

Entre na pasta raiz do projeto e utilize o comando `npm install` para instalar as dependências do projeto.

Após instalar todos os pacotes, utilize o comando `npm start` para exibir a página da aplicação, a aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Estrutura da aplicação

```js
📦src
 ┣ 📂components
 ┃ ┣ 📂buttons
 ┃ ┃ ┗ 📜ToggleColorMode.jsx
 ┃ ┣ 📂cards
 ┃ ┃ ┗ 📜UserInfosCard.jsx
 ┃ ┣ 📂commentSection
 ┃ ┃ ┗ 📜CommentSection.jsx
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┣ 📂loading
 ┃ ┃ ┗ 📜Loading.jsx
 ┃ ┣ 📂postCard
 ┃ ┃ ┗ 📜PostCard.jsx
 ┃ ┣ 📂postSection
 ┃ ┃ ┗ 📜PostSection.jsx
 ┃ ┗ 📜README.md
 ┣ 📂pages
 ┃ ┣ 📂details
 ┃ ┃ ┗ 📜PostDetails.jsx
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📜Users.jsx
 ┃ ┃ ┗ 📜UsersPosts.jsx
 ┃ ┗ 📜README.md
 ┣ 📂redux
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜postSlice.js
 ┃ ┃ ┗ 📜usersSlice.js
 ┃ ┣ 📂store
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜README.md
 ┣ 📂services
 ┃ ┣ 📜README.md
 ┃ ┣ 📜apiPostsHelper.js
 ┃ ┗ 📜apiUserHelper.js
 ┣ 📜App.jsx
 ┣ 📜index.jsx
 ┗ 📜theme.js
```

### Components

O Diretório guarda todos os componentes que podem ser reutilizados em nossa aplicação.

Por exemplo, o componente `Header.jsx` é renderizado em todas as páginas.

### Pages

Responsável por armazenar todos as páginas de nossa aplicação onde serão renderizados os componentes. O Projeto conta com duas páginas, a Home e Página de detalhes de um post.

### Redux

Armazena toda a lógica do redux para gerenciar o estado na aplicação.

### Services

Armazena os arquivos responsáveis por fazer as chamadas às APIs necessárias para funcionamento da aplicação, dessa forma evitamos repetição de código, bastando chamar a função necessária em qualquer lugar do código para chamar a API.

### Arquivo App.jsx

Onde é renderizada as páginas de nossa aplicação, onde configuramos as rotas das páginas utilizando `react-router-dom`, onde utilizamos o provider do Redux.

### Arquivo index.jsx

O arquivo raíz da aplicação React, responsável por configurar alguns elementos, como o Chakra Provider e BrowserRouter.

### Arquivo theme.js

Arquivo necessário para configurar os temas globais do Chakra UI.

## Deploy da Aplicação

A aplicação também está disponível [nesse site](https://desafio-frontend-posts.vercel.app/home). O Deploy foi feito utilizando Vercel, o que permite o uso da aplicação por qualquer pessoa.

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
