import React from "react";
import { Content, Wrapper } from "./TvShowInfo.styles";

const TvShowInfo = ({title,rating,genres,plot,seasons}) => {
  return (
    <Wrapper>
      <Content>
        <h1>{title}</h1>
        <h4>
          Rating : <span>{rating} (tmdb)</span> 
        </h4>
        <h2>{genres}</h2>
        <h3>
          {/* Runtime : <span>{calcTime(runtime)}</span> */}
        </h3>
        <p>{plot}</p>
        <h4>Seasons : <span>{seasons}</span></h4>
      </Content>
    </Wrapper>
  );
};

export default TvShowInfo;