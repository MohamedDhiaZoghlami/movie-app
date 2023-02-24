import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Slide,
  Wrapper,
  Btn,
  LeftArrow,
  RightArrow,
  Content,
  Left,
  Right,
  TrailerBtn,
  Play,
} from "./Hero.styles";

const Hero = ({
  images = [],
  titles = [],
  overviews = [],
  rating = [],
  movieId = [],
  ...props
}) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSlider = () => {
    currentSlider < 5
      ? setCurrentSlider(currentSlider + 1)
      : setCurrentSlider(0);
  };

  const prevSlider = () => {
    currentSlider > 0
      ? setCurrentSlider(currentSlider - 1)
      : setCurrentSlider(5);
  };

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            background: `linear-gradient(to left , rgba(0,0,0,0.5) 50% , rgba(0,0,0,0.75) 100%),url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginLeft: index === 0 ? `-${currentSlider * 100}%` : undefined,
          }}
        >
          <div className="btn">
            <Btn onClick={prevSlider}>
              <LeftArrow />
            </Btn>
          </div>
          <Content>
            <Left>
              <h1>{titles[index]}</h1>
              <p>{overviews[index]}</p>
              <h2>
                <span>Rating : </span>
                {rating[index]}
              </h2>
              <Link to={`/movie/${movieId[index]}`}>
                {" "}
                <button>Play Now</button>{" "}
              </Link>
            </Left>
            {/* <Right>
                <TrailerBtn>
                    <Play /> <h3>Watch trailer</h3>
                </TrailerBtn>
            </Right> */}
          </Content>
          <div className="btn">
            <Btn onClick={nextSlider}>
              <RightArrow />
            </Btn>
          </div>
        </Slide>
      ))}
    </Wrapper>
  );
};

export default Hero;
