import { useState, useEffect } from "react";
//API
import API from "../API";

const initialeState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [loading,setLoading] = useState(false);
  const [state, setState] = useState(initialeState);
  const [movie, setMovie] = useState({ results: [] });
  const [topRated,setTopRated] = useState({results: []});
  const [tvshow,setTvshow] = useState({results: []});
  const [tvshowTop,setTvshowTop] = useState({results: []});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchTerm , setSearchTerm] = useState('');

  const fetchMoviesForSearch = async (page,searchTerm="") => {
    try {
      setLoading(true);
      const searchmovies = await API.fetchMoviesForSearch(searchTerm,page);

      setState(prev => ({
        ...searchmovies,
        results:
          page > 1 ? [...prev.results, ...searchmovies.results] : [...searchmovies.results],
      }));
      setLoading(false);
    } catch {
      console.log("error searching");
    }
  };

  

  const fetchMovies = async (page) => {
    try {
      setLoading(true);

      const movies = await API.fetchMovies(page);
      const trending = await API.fetchTrendingMovies();
      const mostRated = await API.fetchTopRatedMovies();
      const tvshows = await API.fetchPopularTvShows(page);
      const mostRatedtv = await API.fetchTopRatedTvShow();
      
      
      setState(prev => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
      setMovie(() => (movie.results = [...trending.results]));
      setTopRated(() => (topRated.results=[...mostRated.results]));
      setTvshow(()=>(tvshow.results=[...tvshows.results]));
      setTvshowTop(()=>(tvshowTop.results=[...mostRatedtv.results]));

      setLoading(false);
    } catch {
      console.log("error");
    }
  };

  //Initial

  useEffect(() => {
    setState(initialeState);
    fetchMovies(1);
  }, []);

  //Load more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  //initial search 
  useEffect(()=>{
    setState(initialeState);
    fetchMoviesForSearch(1,searchTerm);
  },[searchTerm]);


  return { state, movie ,topRated,tvshow,loading,tvshowTop,setIsLoadingMore,searchTerm, setSearchTerm,loading,isLoadingMore};
};
