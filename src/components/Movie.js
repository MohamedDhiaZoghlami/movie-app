import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
import MovieHeader from "./MovieHeader";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner";
import Actor from "./Actor";
import Slider from "./Slider";
import VideoPlayer from "./VideoPlayer";
import Footer from "./Footer";

const Movie = () => {
  const { movieId } = useParams();

  const {
    state: movie,
    loading,
    recommended,
    similar,
  } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  return (
    <>
      <MovieHeader
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}
      />
      <MovieInfo
        title={movie.original_title}
        rating={movie.vote_average}
        runtime={movie.runtime}
        plot={movie.overview}
        genres={movie.genres.map(genre => genre.name).join(" / ")}
        director={movie.directors
          .map(director => director.original_name)
          .join(", ")}
      />
      <VideoPlayer playerUrl="https://iframe.mediadelivery.net/embed/11572/123f8842-7f8b-49e4-a750-4d3900549e87?autoplay=true"/>
      <Grid header='Actors'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : null
            }
          />
        ))}
      </Grid>
      {similar[0] ? (
        <Slider
          clickable={true}
          text='Similar Movies'
          movieId={similar
            .filter((_, index) => index < 20)
            .map(item => item.id)}
          images={similar
            .filter((_, index) => index < 20)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={similar
            .filter((_, index) => index < 20)
            .map(item => item.original_title)}
          rating={similar
            .filter((_, index) => index < 20)
            .map(item => item.vote_average)}
        />
      ) : null}
      {recommended[0] ? (
        <Slider
          clickable={true}
          text='Recommended Movies'
          movieId={recommended
            .filter((_, index) => index < 20)
            .map(item => item.id)}
          images={recommended
            .filter((_, index) => index < 20)
            .map(
              item => `${IMAGE_BASE_URL}${POSTER_SIZE}${item.backdrop_path}`
            )}
          titles={recommended
            .filter((_, index) => index < 20)
            .map(item => item.original_title)}
          rating={recommended
            .filter((_, index) => index < 20)
            .map(item => item.vote_average)}
        />
      ) : null}
      <Footer />
    </>
  );
};

export default Movie;
