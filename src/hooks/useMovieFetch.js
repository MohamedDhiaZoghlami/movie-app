import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = movieId => {
    const [state,setState] = useState({});
    const [loading,setLoading]= useState(true);
    const [error,setError] = useState(false);
    const [similar,setSimilar] = useState({results:[]});
    const [recommended,setRecommended] = useState({results:[]});

    useEffect(()=>{
        const fetchMovie = async()=>{
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const similars = await API.fetchSimilarMovies(movieId);
                const recom = await API.fetchRecommendedMovies(movieId);
                //Get directors only 
                const directors = credits.crew.filter(member => member.job ==='Director');
                //Get the first 3 actors 
                const actor = credits.cast.filter(actor => actor.order<5);

                setState({
                    ...movie,
                    actors : [...actor],
                    directors
                })

                setSimilar(()=>similar.results=[...similars.results]);

                setRecommended(()=>recommended.results=[...recom.results]);
                

                setLoading(false);
            } catch(error) {
                setError(true);
            }
        };

        fetchMovie();
    },[movieId]);

    return {state , loading , error,similar,recommended} ;
}