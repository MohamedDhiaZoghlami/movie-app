import { useState, useEffect } from "react";
import API from '../API';

const initialeState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

export const useTvFetch = tvId => {
    const [state,setState] = useState({});
    const [loading,setLoading]= useState(true);
    const [tv,setTv] = useState(initialeState)
    const [error,setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');


    const fetchTvShow = async(page,searchTerm="")=>{
        try {
            setLoading(true);
            setError(false);

            const tvshow = await API.fetchTvShow(tvId);
            const tvshows = await API.fetchPopularTvShows(page,searchTerm);
            setState({...tvshow});
            setTv(prev => ({
                ...tvshows,
                results:
                  page > 1 ? [...prev.results, ...tvshows.results] : [...tvshows.results],
              }));
            setLoading(false);
        } catch(error) {
            setError(true);
        }
    };

    useEffect(()=>{
        setTv(initialeState);
        fetchTvShow(1,searchTerm);
    },[tvId,searchTerm]);

    //Load more 
    useEffect(()=>{
        if(!isLoadingMore) return;
        fetchTvShow(tv.page + 1,searchTerm);
    
        setIsLoadingMore(false);
    },[tv.page,isLoadingMore,searchTerm])

    return {state,tv , loading , error,setIsLoadingMore,searchTerm,setSearchTerm} ; 
};