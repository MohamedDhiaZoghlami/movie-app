import {
    POPULAR_BASE_URL,
    TRENDING_BASE_URL,
    SEARCH_BASE_URL,
    POPULAR_TV_SHOW_URL,
    API_URL,
    API_KEY,
    TOP_RATED_URL
  } from './config';
    
  const apiSettings = {
    fetchMoviesForSearch: async (searchTerm, page) => {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchMovies: async (page) => {
      const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchTrendingMovies : async () => {
      const endpoint = `${TRENDING_BASE_URL}`;
      return await (await fetch(endpoint)).json();
    },
    fetchTopRatedMovies : async () => {
      const endpoint = `${TOP_RATED_URL}`;
      return await (await fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
    },
    fetchCredits: async movieId => {
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return await (await fetch(creditsEndpoint)).json();
    },
    fetchSimilarMovies : async movieId => {
      const endpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;
      return await (await fetch(endpoint)).json();
    },
    fetchRecommendedMovies : async movieId => {
      const endpoint = `${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
      return await (await fetch(endpoint)).json();
    },
    fetchPopularTvShows: async (page,searchTerm) => {
      const endpoint = searchTerm 
        ? `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchTerm}&include_adult=false`
        :`${POPULAR_TV_SHOW_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchTvShow : async (tvId) => {
      const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
    },
    fetchTopRatedTvShow : async () => {
      const endpoint = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
      return await (await fetch(endpoint)).json();
    },
    fetchMultiSearch : async (page,searchMulti) => {
      const endpoint = searchMulti
        ? `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${searchMulti}&page=${page}&include_adult=false`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    }
  };
  
  export default apiSettings;