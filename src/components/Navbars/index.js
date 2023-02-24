import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, CloseBtn, HamBars } from "./Navbars.styles";

const Navbars = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked(!clicked);
  };
  return (
    <Wrapper>
      <h1>TnMovies</h1>
      <ul className={clicked ? "navshown" : "navhidden"}>
        <li onClick={toggle}>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/Movies" className="link">
            Movies
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/TvShows" className="link">
            Tv Shows
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/Pricing" className="link">
            Pricing
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/Faqs" className="link">
            FAQ's
          </Link>
        </li>
        <li onClick={toggle}>
          <Link to="/About" className="link">
            About Us
          </Link>
        </li>
      </ul>
      {clicked ? <CloseBtn onClick={toggle} /> : <HamBars onClick={toggle} />}
    </Wrapper>
  );
};

export default Navbars;
