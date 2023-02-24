import React from 'react';
import Grid from './Grid';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Thumb from './Thumb';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../config';
import ButtonLoadMore from './ButtonLoadMore';
import Header from './Header';
import SearchBar from './SearchBar';
import Space from './Space';
import NoImage from '../Images/no_image.jpg';
import Spinner from './Spinner';
import Footer from './Footer';


const Movies =() => {

    const { state , setIsLoadingMore,searchTerm, setSearchTerm,loading} = useHomeFetch();

    return (
        <>
            {!searchTerm ? <Header text='Movies' /> : <Space />}
            <SearchBar setSearchTerm={setSearchTerm} placer='Search Movies'/>
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies' }>
                {state.results.map(movie=>(
                    <Thumb 
                        key={movie.id}
                        image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                        clickable
                        movieId={movie.id}
                    />
                ))}    
            </Grid>
            {loading && <Spinner />} 
            {!searchTerm ? <ButtonLoadMore callback={()=>setIsLoadingMore(true)} text='Load More' /> : null }
            {!searchTerm ? <Footer /> : null}

        </>
    )
}

export default Movies;