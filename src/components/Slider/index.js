import React, { useState } from "react";
import { Wrapper, Content, Slide, Nextbtn, Prevbtn } from "./Slider.styles";
import { Link } from "react-router-dom";

const Slider = ({
  images = [],
  titles = [],
  text,
  rating = [],
  clickable,
  movieId = [],
  tvId = [],
  ...props
}) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const count = images.length;

  const nextSlider = () => {
    currentSlider < count-5
      ? setCurrentSlider(currentSlider + 1)
      : setCurrentSlider(0);
  };

  const prevSlider = () => {
    currentSlider > 0
      ? setCurrentSlider(currentSlider - 1)
      : setCurrentSlider(0);
  };

  return (
    <Wrapper {...props}>
      <div className="header">
        <h1>{text}</h1>
        {clickable ? <Link to="/Movies"><button>View All</button></Link> : <Link to="/TvShows"><button>View All</button></Link>}
      </div>
      <Content>
        {currentSlider !== count-5 &&count>5 ? <Nextbtn onClick={nextSlider} /> : null}
        {currentSlider !== 0 ? <Prevbtn onClick={prevSlider} /> : null}
        {images.map((imageUrl, index) => {
            return (
            <Slide
              key={index}
              style={{
                backgroundImage: `linear-gradient(to left , rgba(0,0,0,0.2) 50% , rgba(0,0,0,0.5) 100%),url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginLeft:
                  index === 0 ? `-${currentSlider * 290}px` : undefined,
              }}
            >
              <h2>{titles[index]}</h2>
              <h3>
                <span>Rating : </span>
                {rating[index]}
              </h3>
              {clickable ? (<Link to={`/movie/${movieId[index]}`}><button>Play Now</button></Link>) : (<Link to={`/tvshow/${tvId[index]}`}><button>Play Now</button></Link>)}
            </Slide>
          )
            })}
      </Content>
    </Wrapper>
  );
};

export default Slider;
