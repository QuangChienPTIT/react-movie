import React, { Component, Fragment } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Slider from "react-slick";
import "./style.scss";

export default class MovieList extends Component {
  //render movie with movie list
  renderMovies = (movieList) => {
    var result = "";
    if (Array.isArray(movieList)) {
      result = movieList.map((movie, index) => {
        return (
          <MovieItem
            key={index}
            title={movie.title || movie.original_name || movie.original_title}
            poster={movie.poster_path}
            id={movie.id}
          ></MovieItem>
        );
      });
    }
    return result;
  };
  render() {
    const { movieList, type, title } = this.props;
    var movieListEle = "";
    //get settings of slick plugin
    if (type === "slider") {
      const dataSlick = {
        slidesToShow: 6,
        slidesToScroll: 3,
        swipe: true,
        arrows: false,
      };
      movieListEle = (
        <Slider {...dataSlick} className="movie-list">
          {this.renderMovies(movieList)}
        </Slider>
      );
    } else {
      movieListEle = (
        <div className="movie-list grid row">
          {this.renderMovies(movieList)}
        </div>
      );
    }
    return (
      <Fragment>
        <h4 className="movie-list-title">{title}</h4>
        {movieListEle}
      </Fragment>
    );
  }
}
