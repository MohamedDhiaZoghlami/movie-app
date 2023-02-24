import React from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import Hero from "./Hero";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Slider from "./Slider";
import Spinner from "./Spinner";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Thumb from './Thumb';
import NoImage from '../Images/no_image.jpg';
import Grid from './Grid';
import { useMultiSearch } from "../hooks/useMultiSearch";

const Home = () => {
  const { state, movie, loading, topRated, tvshow, tvshowTop } = useHomeFetch();
  const {searchMulti,setSearchMulti,multi,searchLoading} = useMultiSearch();
  if (loading) return <Spinner />;
  return (
    <>
      {state.results[0] ? (
        <Hero
          movieId={state.results
            .filter((_, index) => index < 6)
            .map(item => item.id)}
          images={state.results
            .filter((_, index) => index < 6)
            .map(
              item => `${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.backdrop_path}`
            )}
          titles={state.results
            .filter((_, index) => index < 6)
            .map(item => item.original_title)}
          overviews={state.results
            .filter((_, index) => index < 6)
            .map(item => item.overview)}
          rating={state.results
            .filter((_, index) => index < 6)
            .map(item => item.vote_average)}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchMulti} placer='Search...'/>
      {searchLoading && <Spinner />}
      {searchMulti  ? <Grid header='Search Results'>
                {multi.results.map(item=>(
                    <Thumb 
                        key={item.id}
                        image={item.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${item.poster_path}` : NoImage}
                        clickable={item.media_type==="movie" ? true : false}
                        movieId={item.id}
                        tvId={item.id}
                    />
                ))}    
            </Grid> : null}
           

      {state.results[0] ? (
        <Slider
          clickable
          text='Latest Movies'
          movieId={state.results
            .filter((_, index) => index > 5 && index < 20)
            .map(item => item.id)}
          images={state.results
            .filter((_, index) => index > 5 && index < 20)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={state.results
            .filter((_, index) => index > 5 && index < 20)
            .map(item => item.original_title)}
          rating={state.results
            .filter((_, index) => index > 5 && index < 20)
            .map(item => item.vote_average)}
        />
      ) : null}
      {movie[0] ? (
        <Slider
          clickable
          text='Trending Movies'
          movieId={movie.map(item => item.id)}
          images={movie.map(
            item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
          )}
          titles={movie.map(item => item.original_title)}
          rating={movie.map(item => item.vote_average)}
        />
      ) : null}
      {topRated[0] ? (
        <Slider
          clickable={true}
          text='Top Rated Movies'
          movieId={topRated.map(item => item.id)}
          images={topRated.map(
            item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
          )}
          titles={topRated.map(item => item.original_title)}
          rating={topRated.map(item => item.vote_average)}
        />
      ) : null}
      {tvshow[0] ? (
        <Slider
          clickable={false}
          text='Popular tvshow'
          tvId={tvshow
            .filter(item => item.backdrop_path != null)
            .map(item => item.id)}
          images={tvshow
            .filter(item => item.backdrop_path != null)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={tvshow
            .filter(item => item.backdrop_path != null)
            .map(item => item.name)}
          rating={tvshow
            .filter(item => item.backdrop_path != null)
            .map(item => item.vote_average)}
        />
      ) : null}
      {tvshowTop[0] ? (
        <Slider
          clickable={false}
          text='Top Rated tvshow'
          tvId={tvshowTop
            .filter(item => item.backdrop_path != null)
            .map(item => item.id)}
          images={tvshowTop
            .filter(item => item.backdrop_path != null)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={tvshowTop
            .filter(item => item.backdrop_path != null)
            .map(item => item.name)}
          rating={tvshowTop
            .filter(item => item.backdrop_path != null)
            .map(item => item.vote_average)}
        />
      ) : null}
      {state.results[0] ? (
        <Slider
          clickable
          text='WatchList Movies'
          movieId={state.results
            .filter((_, index) => index > 0 && index < 20)
            .map(item => item.id)}
          images={state.results
            .filter((_, index) => index > 0 && index < 20)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={state.results
            .filter((_, index) => index > 0 && index < 20)
            .map(item => item.original_title)}
          rating={state.results
            .filter((_, index) => index > 0 && index < 20)
            .map(item => item.vote_average)}
        />
      ) : null}
      {movie[0] ? (
        <Slider
          clickable
          text='Recommended Movies'
          movieId={movie.map(item => item.id)}
          images={movie.map(
            item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
          )}
          titles={movie.map(item => item.original_title)}
          rating={movie.map(item => item.vote_average)}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default Home;
