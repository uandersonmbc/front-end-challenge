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

The project retrieves data from the Themoviedb API and creates a listing of the most popular movies. It includes a genre filter that allows you to choose which genres of movies you want to see. There is also a movie details page that displays the cast, trailer, and recommended movies. In this same project, depending on the language of your browser, it will retrieve the data in the language of your browser.


## :sparkles: Features ##
:heavy_check_mark: The user should have access to a listing of the most popular movies of the day.
:heavy_check_mark: The user should be able to paginate through the list to discover new movies.
:heavy_check_mark: The user should be able to filter the listed movies by genre, with the option to select multiple genres.
:heavy_check_mark: When applying filters, the filtering criteria should be preserved during pagination.
:heavy_check_mark: The user should be able to remove filters, and the listing should be updated accordingly.
:heavy_check_mark: The user should have access to a separate page with detailed information about a movie when clicking on an item in the listing.
:heavy_check_mark: The user should be able to return to the movie listing page with the filters still active.

## :rocket: Technologies ##

The following tools were used in this project:
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Next](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :white_check_mark: Requirements ##

Before you begin :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

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

## Configuration of .env
```
NEXTJS_API=https://api.themoviedb.org/3
NEXTJS_API_KEY=obtenha no site da themoviedb
NEXTJS_CDN=https://www.themoviedb.org/t/p
NEXTJS_LOCALE=en-US

```

## Run the project.
```bash
# Run the project
$ yarn dev 

  or

$ npm run dev

# The server will initialize in the <http://localhost:3000>
```

## Executar os testes
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
