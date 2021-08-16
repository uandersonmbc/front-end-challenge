<div align="center" id="top"> 
  <img src="https://user-images.githubusercontent.com/26174031/129483324-f2d1d5a9-dbb2-4197-9c40-1fe53617c3d7.png" alt="Front End Challenge" />
  &#xa0;

  <a href="https://front-end-challenge-theta.vercel.app/pt-BR">Demo</a>
</div>

<h1 align="center">Front End Challenge</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/uandersonmbc/front-end-challenge?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/uandersonmbc/front-end-challenge?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/uandersonmbc/front-end-challenge?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/uandersonmbc/front-end-challenge?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/uandersonmbc/front-end-challenge?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/uandersonmbc/front-end-challenge?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/uandersonmbc/front-end-challenge?color=56BEB8" />
</p>


<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/uandersonmbc" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

O projeto obtém os dados da api do Themoviedb e faz uma listagem dos filmes mais populares. Existe um filtro de gêneros para você escolher de quais gêneros você quer ver os filmes. Também tem uma página de detalhes dos filmes, onde mostra o elenco, trailer e filmes recomendados. Nesse mesmo projeto dependendo de qual seja o idioma do seu navegador ele vai obter os dados com o idioma que seu navegador tá.


## :sparkles: Features ##
:heavy_check_mark: O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

:heavy_check_mark: O usuário deve conseguir paginar a lista para encontrar novos filmes

:heavy_check_mark: O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero

:heavy_check_mark: Ao realizar filtros, o mesmo deve ser persistido pela paginação

:heavy_check_mark: O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido

:heavy_check_mark: O usário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

:heavy_check_mark: O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

## :rocket: Technologies ##

As seguintes ferramentas foram utilizadas neste projeto:
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciando ##

```bash
# Clone this project
$ git clone https://github.com/uandersonmbc/front-end-challenge

# Access
$ cd front-end-challenge

# Install dependencies
$ yarn 

  or 

$ npm install
```

## Configuração do .env
```
NEXTJS_API=https://api.themoviedb.org/3
NEXTJS_API_KEY=obtenha no site da themoviedb
NEXTJS_CDN=https://www.themoviedb.org/t/p
NEXTJS_LOCALE=en-US

```

## Executar o projeto
```bash
# Run the project
$ yarn dev 

  or

$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## Executar os testes
Não foram finalizados, mas configurei o ambiente de teste.
```bash
$ yarn test 

  or

$ npm run test

```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/uandersonmbc" target="_blank">Uanderson Nunes</a>

&#xa0;

<a href="#top">Voltar para o topo</a>
