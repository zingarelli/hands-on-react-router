# Hands-on: React Router

[**Click here to read the English version of this Readme**](#credits)

Praticando com a biblioteca React Router para criar rotas para diferentes páginas de um site de apresentação chamado "Olá mundo", reforçando o conceito de SPA (Single Page Application).

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Praticando com React Router**
| :label: Tecnologias | React
| :rocket: URL         | https://hands-on-react-router.vercel.app
| :fire: Curso     | https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript  

![](https://user-images.githubusercontent.com/19349339/216986656-771e0620-9c92-4a3c-a6f7-4a416b3320b1.png#vitrinedev)

## Créditos

Este projeto foi desenvolvido no [curso de React Router](https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript) da [Alura](https://www.alura.com.br). 

O curso foi ministrado pelo **[Antônio Evaldo](https://www.linkedin.com/in/antonio-evaldo/)**, que também desenvolveu o projeto. Fiz somente algumas alterações de layout, texto e inseri minha foto na página inicial.

Os textos dos artigos foram disponibilizados pelo curso em um arquivo `posts.json` e não foram modificados.

O design foi feito pela equipe da Alura e disponibilizado em um [arquivo Figma](https://www.figma.com/file/nDTrIQxTu6aldQG0o0iAbj/Olá%2C-Mundo!---Projeto-React%3A-router?node-id=38%3A716&t=24eCnWIWgxAHHPNk-0).

## Detalhes do projeto

Você pode [ver o projeto online clicando aqui](https://hands-on-react-router.vercel.app).

Este é um projeto desenvolvido em React, que serve como uma página de apresentação de um desenvolvedor. Ele consiste de 4 páginas: 

- [Página inicial](https://hands-on-react-router.vercel.app): possui um banner com um pequeno texto de apresentação do profissional, seguido por uma galeria de cards com artigos de tecnologia;

- [Sobre mim](https://hands-on-react-router.vercel.app/sobre-mim): página para o profissional contar sua história e colocar uma imagem;

- Posts: cada card da página inicial leva a uma página de Post, que contém um artigo de tecnologia e, ao final, uma galeria com 4 posts recomendados. Você pode ver um exemplo [clicando aqui](https://hands-on-react-router.vercel.app/posts/5);

- [Página 404](hands-on-react-router.vercel.app/pagina-que-nao-existe): página padrão quando se digita uma URL inexistente, com um botão de voltar que retorna à página inicial.

Você pode ver abaixo um vídeo mostrando a navegação pelas páginas:

https://user-images.githubusercontent.com/19349339/216996144-2a15ea5a-fcef-4b3f-9510-1503d7a42e41.mp4

## O que eu aprendi

### Sobre o React Router 

O [React Router](https://reactrouter.com/en/6.8.0/) é uma biblioteca para gerenciar rotas dentro de uma SPA (Single Page Application). O conceito de SPA é dar ao usuário uma experiência de navegação dentro de uma única página, de modo que ao clicar em algum link a página não é totalmente recarregada: somente as informações necessárias são renderizadas no DOM. As rotas são baseadas no texto que vem após a URL da aplicação, por exemplo `http://meusite.com/rota-para-outra-pagina`

Comando para instalar a biblioteca (o `@6` indica que será instalada a versão 6):

    npm install react-router-dom@6

### Componentes do React Router

- `<BrowserRouter />`: é o componente principal, necessário para para fazer o gerenciamento das rotas. É dentro dele que são colocados os outros componentes da biblioteca;

- `<Routes />`: age como um container para as rotas disponíveis, agregando um conjunto de `<Route />`;

- `<Route />`: é o componente que contém informações sobre uma rota:

    - ele possui algumas props, como caminho para a rota (prop `path`) e página a ser renderizada (prop `element`);

    - exemplo de rota para página 404: `<Route path="*" element={/* seu JSX para página não encontrada */} />`.

- `<Link />`: substitui a tag `<a>`, pois esta tag faz um refresh do navegador para ir para outra página. Este componente altera a rota (com a prop `to`), prevenindo o refresh e mantendo o conceito de SPA.

Componentes dentro de `<BrowserRouter />`, porém fora de `<Routes />` serão **renderizados em todas as rotas**. Isso serve para fixar componentes comuns a diferentes páginas, como header, navegação, footer, etc.

Rotas aninhadas: são rotas `<Route />` **filhas** de outra `<Route />`. Esse aninhamento serve para que a rota mãe seja um template padrão a ser compartilhado com as rotas filhas. Quando algumas páginas (mas não todas) compartilham de layout parecido, você pode utilizar este recurso para evitar repetição de componentes, colocando dentro da rota mãe os componentes em comum para as rotas filhas. O conteúdo de cada rota filha é renderizado na rota mãe por meio do uso do componente `<Outlet />`. Exemplo de código:

```jsx
// --- dentro do JSX que contém as rotas
<Route path="/" element={<DefaultTemplate />}>
    <Route path="/" element={<Home />} />
    <Route path="sobre-mim" element={<AboutMe />} />
</Route>

// --- dentro do arquivo DefaultTemplate.js
export default function DefaultTemplate() {
    return (

        {/* código com o conteúdo comum a todas as rotas filhas... */}

        <Outlet />
    );
}
```

O `path` da rota mãe pode ser qualquer rota, não necessariamente `/`. As rotas filhas serão descendentes do caminho que você der à rota mãe caso você coloque um *caminho relativo* (sem o `/` no início) no `path` delas. Caso o caminho de uma rota filha seja o mesmo da mãe, você pode substituir `path="/"` por `index` (sem valor, é um booleano true por padrão) na rota filha.

### Hooks do React Router

- `useLocation()`: retorna um objeto com informações sobre a URL (é semelhante ao que recebemos usando `window.location`);

- `useNavigate()`: retorna uma função que possibilita a navegação por rotas e pelo histórico de navegação. Útil, por exemplo, em eventos de onClick de botão Voltar. A função aceita uma string com a rota de onde se quer navegar, ou também números (para o caso de navegar pelo histórico);

- `useParams()`: retorna um conjunto de pares "chave: valor" com os parâmetros enviados via URL. Por exemplo, na URL `http://meusite.com/posts/1`, o parâmetro da rota `posts` é `1`). Os parâmetros podem ser enviados ao `path` das rotas utilizando um seletor com a nomenclatura `:nomeDoParametro` após a rota. O hook irá retornar `nomeDoParametro: valor` e para acessar o valor, basta usar a notação de ponto (`.nomeDoParametro`). Exemplo de código:

```js
// --- dentro do JSX que contém as rotas
<Route path="posts/:id" element={<Post />} />

// --- em algum outro código que utiliza o useParams
const { id } = useParams();
```

Para passar mais parâmetros, você deve separá-los por `/` no path. Exemplo de código:

```js
// --- dentro do JSX que contém as rotas
<Route path="/posts/:sectionId/:postId" element={<Post />} />

// --- em algum outro código que utiliza o useParams
const { sectionId, postId } = useParams();
```

- `useSearchParams()`: trabalha com os parâmetros enviados pela URL do modo "convencional", que é utilizando query params, em que os parâmetros são enviados após `?` e concatenados por `&` na URL (exemplo `http://meusite.com/posts?sectionId=1&postId=7`). O retorno desse hook é um objeto do tipo URLSearchParams. Exemplo de código:

```js
// --- dentro do JSX que contém as rotas, não envia seletores no path
<Route path="posts" element={<Post />} />

// --- em algum outro código que utiliza o useSearchParams
const [searchParams, setSearchParams] = useSearchParams();

// uso do get para obter o valor dos parâmetros
console.log(searchParams.get('sectionId'))
console.log(searchParams.get('postId')));

```

Query params são mais comuns para realizar buscas e filtros de resultados, por exemplo. Para renderizar conteúdos como posts diferentes, costuma-se utilizar mais os parâmetros de rota.

### Convenções e dicas

- Uma convenção é renomear o App.js (ou o arquivo que usar o `<BrowserRouter />`) para routes.js;

- Absolute imports: ao criar um arquivo jsconfig.json com o código abaixo, é possível deixar a pasta `src` como sendo a raiz para os imports de arquivos, facilitando o import entre componentes e outras subpastas de `src`:

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

- É possível transformar um SVG em um component React utilizando o pacote SVGR, disponível por padrão em um projeto criado com o `create-react-app`:

```js
import { ReactComponent as NomeDoComponente } from 'caminho_do_arquivo_SVG';
```

- Biblioteca React Markdown. Oferece um componente `<ReactMarkDown /> ` em que você pode englobar um texto escrito em linguagem Markdown. Este componente irá fazer a conversão do texto em Markdown para um equivalente em HTML. É necessário instalar a biblioteca (`npm install react-markdown`).

## Instalação

O projeto foi criado com o Create React App, utilizando Node.js (versão v16.15.1) e npm (versão 8.11.0). É necessário possuir ambos instalados em sua máquina para rodar a aplicação.

Após clonar/baixar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando para instalar todas as dependências necessárias

    npm install

Após isso, você pode rodar a aplicação em modo de desenvolvimento com o seguinte comando: 

    npm start

A aplicação irá rodar no endereço http://localhost:3000.

---

## Credits

This project was developed in a [React Router course](https://www.alura.com.br/curso-online-React-desenvolvendo-react-router-javaScript) (in portuguese) from [Alura](https://www.alura.com.br). 

The instructor in this course is **[Antônio Evaldo](https://www.linkedin.com/in/antonio-evaldo/)**. He's also developed the initial project. I've made some changes in the layout, text and inserted my own photo in the Home page.

Texts for the posts were provided in the course in a `posts.json` file and were not modified.

The design was created by Alura's team and made available in a  [Figma file](https://www.figma.com/file/nDTrIQxTu6aldQG0o0iAbj/Olá%2C-Mundo!---Projeto-React%3A-router?node-id=38%3A716&t=24eCnWIWgxAHHPNk-0).

## Project details

You can [view the project online by clicking here](https://hands-on-react-router.vercel.app).

This project was developed using React, and serves as a presentation page for a developer. It has 4 pages (in Portuguese):

- [Home](https://hands-on-react-router.vercel.app): it has a banner with a small presentation text about the professional, followed by a gallery of cards with links to tech articles;

- [About me](https://hands-on-react-router.vercel.app/sobre-mim): in which the professinal can tell his/her story in details and add an image;

- Posts: every card in the Home page leads to a Post page with a tech article and a small gallery of 4 cards with recommended posts. You can see an example [by clicking here](https://hands-on-react-router.vercel.app/posts/5);

- [Not found](hands-on-react-router.vercel.app/pagina-que-nao-existe): default 404 page, with a button to return to the Home page.

Below you can watch a video navigating through the pages of this project:

https://user-images.githubusercontent.com/19349339/216996144-2a15ea5a-fcef-4b3f-9510-1503d7a42e41.mp4

## Lessons learned

### React Router 

[React Router](https://reactrouter.com/en/6.8.0/) is a library to manage routes in a SPA (Single Page Application). The concept behind a SPA is to give users a navigation experience by using one single webpage, in which whenever the user clicks in a link, the page is not fully refreshed - instead, only the necessary DOM sections are rerendered. Routes are based on the text that comes after the website's URL, for example `http://mywebsite.com/route-to-another-page`.

Command to install the library (`@6` means version 6 will be installed):

    npm install react-router-dom@6

### React Router components

- `<BrowserRouter />`: it's the main component, required to manage routes. Other React Router components are nested inside it;

- `<Routes />`: acts as a container for the available routes, combining a set of `<Route />` (without -s in the end) components;

- `<Route />`: this component holds information about a route:

    - it has some props, like the path to a route (`path` prop) and the page to be rendered (`element` prop);

    - "not found" route example: `<Route path="*" element={/* your JSX for a not found page */} />`.

- `<Link />`: acts a substitute for the anchor tag (`<a>`), since anchor tags refresh the browser when an user clicks on them. This component alters the route (using `to` prop), preventing the refresh and thus keeping the SPA concept.

Components inside `<BrowserRouter />`, but outside `<Routes />` will be **rendered in all routes**. This is useful to reuse components that holds common sections used by different pages, like header, navigation, footer, etc.

Nested routes: it's when a `<Route />` component has other `<Route />` as children. This enables a "parent" route to become a default template to be shared with its children routes. When some pages (but not all pages) have a similar layout, you can use nested routes to avoid repeating components on every page - you only place them in the parent route. The content of each children is rendered in the parent route by using the `<Outlet />` component. Code example:

```jsx
// --- in the JSX that manages routes
<Route path="/" element={<DefaultTemplate />}>
    <Route path="/" element={<Home />} />
    <Route path="sobre-mim" element={<AboutMe />} />
</Route>

// --- in DefaultTemplate.js file
export default function DefaultTemplate() {
    return (

        {/* commom content to every children... */}

        <Outlet />
    );
}
```

Value for `path` prop in the parent route can be any route, not necessarily `/`. If you use a *relative path* (a path starting without `/`) in the children, they will become descendants of the path you assign to the parent. If the path of a child route in the same as the parent route, you can change in the child `path="/"` for `index` (this is a boolean prop, true by default).

### React Router hooks

- `useLocation()`: returns an object with information regarding an URL (similar to what's returned when using `window.location`);

- `useNavigate()`: returns a function that allows navigation through other routes and the browser history. This is helpful, for example, in the onClick event of a "Back" button. The function accepts as an argument a string with the route to navigate to, as well as numbers (if you wish to navigate through the browser history);

- `useParams()`: returns a set of "key: value" of the parameters send in the URL. For example, in the URL `http://mywebsite.com/posts/1`, the route `posts` has a parameter with the value of `1`. In `<Route />` components, parameters can be mapped using a selector with the naming `:nameOfTheParameter` after the route's path. To access the value, you can use the dot notation (`.nameOfTheParameter`). Code example:

```js
// --- in the JSX that manages routes
<Route path="posts/:id" element={<Post />} />

// --- in some other code that uses useParams
const { id } = useParams();
```

You can send more than one parameter, separating them by `/` in the path. Code example:

```js
// --- in the JSX that manages routes
<Route path="/posts/:sectionId/:postId" element={<Post />} />

// --- in some other code that uses useParams
const { sectionId, postId } = useParams();
```

- `useSearchParams()`: this hook manages URL parameters using the "conventional" way, by using query params - those sent in a URL after `?`, concatenated by `&` (example: `http://mywebsite.com/posts?sectionId=1&postId=7`). This hook returns an URLSearchParams object. Code example:

```js
// --- in the JSX that manages routes, you don't add selectors in the path
<Route path="posts" element={<Post />} />

// --- in some other code that uses useSearchParams
const [searchParams, setSearchParams] = useSearchParams();

// using get to retrieve the value of a parameter
console.log(searchParams.get('sectionId'))
console.log(searchParams.get('postId')));

```

The use of query params is common for search and filter results, for example. To render content like blog posts, route params are more often used.

### Tips and conventions

- It's a convention to rename `App.js` (or the file that uses  `<BrowserRouter />`) to `routes.js`;

- Absolute imports: if you create a `jsconfig.json` file with the following code, it's possible to make `src` directory as the root to all imports in your project, which saves time when importing other components and subdirectories of `src`:

```json
{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}
```

- It's possible to create a React component out of a SVG file, by using SVGR package, already available in projects created with  `create-react-app`:

```js
import { ReactComponent as NameForTheComponent } from 'path_to_SVG_file';
```

- React Markdown Library: it has a `<ReactMarkDown />` component that you can use to paste a text written in Markdown format. This component will convert the Markdown text to an equivalent in HTML. You need to install this library (`npm install react-markdown`).

## Installation

This project was bootstrapped with Create React App, using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run it.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the app in the development mode with the following command:

    npm start

The app will run at http://localhost:3000.