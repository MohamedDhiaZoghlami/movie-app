import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
//hook
import { useTvFetch } from "../hooks/useTvFetch";
import MovieHeader from "./MovieHeader";
import TvShowInfo from "./TvShowInfo";
import Spinner from "./Spinner";
import Footer from "./Footer";
import SeasonsSlider from "./SeasonsSlider";

const TvShow = () => {
  const { tvId } = useParams();

  const { state: tv, loading } = useTvFetch(tvId);
  if (loading) return <Spinner />;
  return (
    <>
      <MovieHeader
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${tv.backdrop_path}`}
      />
      <TvShowInfo
        title={tv.original_name}
        rating={tv.vote_average}
        genres={tv.genres.map((genre) => genre.name).join(" / ")}
        plot={tv.overview}
        seasons={tv.number_of_seasons}
      />
      <SeasonsSlider
        text="seasons"
        images={tv.seasons
          .filter((season) => season.season_number > 0)
          .map(
            (season) => `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`
          )}
        titles={tv.seasons
          .filter((season) => season.season_number > 0)
          .map((season) => season.season_number)}
      />
      <Footer />
    </>
  );
};

export default TvShow;
