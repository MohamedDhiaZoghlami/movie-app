import React from "react";
import { Content, Wrapper } from "./MovieInfo.styles";
import { calcTime } from "../../helpers";

const MovieInfo = ({title,rating,genres,runtime,plot,director}) => {
  return (
    <Wrapper>
      <Content>
        <h1>{title}</h1>
        <h4>
          Rating : <span>{rating} (tmdb)</span> 
        </h4>
        <h2>{genres}</h2>
        <h3>
          Runtime : <span>{calcTime(runtime)}</span>
        </h3>
        <p>{plot}</p>
        <h4>Director(s) : <span>{director}</span></h4>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
