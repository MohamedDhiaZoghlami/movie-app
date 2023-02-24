import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";
import Navbars from "./components/Navbars";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import TvShows from "./components/TvShows";
import ScrollToTop from "./components/ScrollToTop";
import Space from "./components/Space";
import Authentification from "./components/Authentification";

const App = () => {
  return (
    <Router>
      <Navbars />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Faqs">
          <Faqs />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/TvShows">
          <TvShows />
        </Route>
        <Route path="/movie/:movieId">
          <Movie />
        </Route>
        <Route path="/tvshow/:tvId">
          <TvShow />
        </Route>
        <Route path="/auth">
          <Authentification />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
};

export default App;
