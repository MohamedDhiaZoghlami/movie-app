import React, { useState } from "react";
import {
  Wrapper,
  Content,
  Slide,
  Nextbtn,
  Prevbtn,
  Dropdown,
} from "./SeasonsSlider.styles";
import { Link } from "react-router-dom";

const SeasonsSlider = ({ images = [], text, titles = [] }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const count = images.length;

  const nextSlider = () => {
    currentSlider < count - 3
      ? setCurrentSlider(currentSlider + 1)
      : setCurrentSlider(0);
  };

  const prevSlider = () => {
    currentSlider > 0
      ? setCurrentSlider(currentSlider - 1)
      : setCurrentSlider(0);
  };

  return (
    <Wrapper>
      <div className='header'>
        <h1>{text}</h1>
      </div>
      <Content>
        {currentSlider !== count - 5 && count > 5 ? (
          <Nextbtn onClick={nextSlider} />
        ) : null}
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
                <h1>season {titles[index]}</h1>
              </Slide>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default SeasonsSlider;
