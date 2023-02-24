// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = "31b9984940d20962819ea498f1869888" ;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const TRENDING_BASE_URL = `${API_URL}trending/movie/day?api_key=${API_KEY}` ;
const TOP_RATED_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const POPULAR_TV_SHOW_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;


const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TRENDING_BASE_URL,
  TOP_RATED_URL,
  POPULAR_TV_SHOW_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
};