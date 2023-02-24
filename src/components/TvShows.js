import React from "react";
import Grid from "./Grid";
import { useTvFetch } from "../hooks/useTvFetch";
import Thumb from "./Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import ButtonLoadMore from "./ButtonLoadMore";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Space from "./Space";
import Footer from "./Footer";

const TvShows = () => {
  const { tv, setIsLoadingMore, searchTerm, setSearchTerm } = useTvFetch();
  return (
    <>
      {!searchTerm ? <Header text="Tv Shows" /> : <Space />}
      <SearchBar setSearchTerm={setSearchTerm} placer="Search Tv Shows" />
      {tv.results[0] && (
        <Grid header={searchTerm ? "Search Results" : "Popular Tv Shows"}>
          {tv.results
            .filter((tv) => tv.poster_path != null)
            .map((tv) => (
              <Thumb
                key={tv.id}
                image={`${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`}
                clickable={false}
                tvId={tv.id}
              />
            ))}
        </Grid>
      )}
      <ButtonLoadMore
        callback={setIsLoadingMore}
        text="Load More"
      ></ButtonLoadMore>
      <Footer />
    </>
  );
};

export default TvShows;
