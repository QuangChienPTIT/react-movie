import React, { Component, Fragment } from "react";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import MovieList from "../../containers/MovieList/MovieList";
import MovieSlider from "../../containers/MovieSlider/MovieSlider"; 

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <MovieSlider
          fetchFunction={TheMovieDBApi.getMovieNowPlaying}
        ></MovieSlider>
        <MovieList
          type="slider"
          title="Trending"
          fetchFunction={TheMovieDBApi.getMovieTrending}
        ></MovieList>
        <MovieList
          type="slider"
          title="Top Rated"
          fetchFunction={TheMovieDBApi.getMovieTopRated}
        ></MovieList>
        <MovieList
          type="slider"
          title="Popular"
          fetchFunction={TheMovieDBApi.getMoviePopular}
        ></MovieList>
        <MovieList
          type="slider"
          title="Up Coming"
          fetchFunction={TheMovieDBApi.getMovieUpComing}
        ></MovieList>
      </Fragment>
    );
  }
}
