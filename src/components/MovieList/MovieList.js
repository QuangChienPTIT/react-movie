import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import Slider from "react-slick";

export default class MovieList extends Component {
  renderMovies = (movieList) => {
    var result = "";
    result = movieList.map((movie, index) => {
      return (
        <MovieItem
          key={index}
          name={movie.name}
          img={movie.img}
          href={movie.href}
        ></MovieItem>
      );
    });
    return result;
  };
  render() {
    const { movieList, type } = this.props;
    if (type === "slider") {
      const dataSlick = {
        slidesToShow: 4,
        slidesToScroll: 4,
      };
      return (
        <Slider {...dataSlick} className="movie-list">
          {this.renderMovies(movieList)}
        </Slider>
      );
    }
    return <div className="movie-list">{this.renderMovies(movieList)}</div>;
  }
}
