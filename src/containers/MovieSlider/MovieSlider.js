import React, { Component } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { getMovieImage } from "../../apis/TheMovieDBApi";
import "./style.scss";

class MovieSlider extends Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  } 

  componentDidMount() {
    const { fetchFunction } = this.props;
    if (typeof fetchFunction == "function") {
      fetchFunction().then((resp) => {
        if (resp.status !== 200) {
          return;
        }
        this.setState({
          movieList: resp.data.results,
        });
      });
    }
  }
  renderMovies = (movieList) => {
    var result = "";
    if (Array.isArray(movieList)) {
      result = movieList.map((movie, index) => {
        if (!movie.backdrop_path) {
          return;
        }
        return (
          <div className="movie-slide" key={index}>
            <div>
              <Link to="/" className="item-link">
                <img
                  alt={movie.title}
                  src={getMovieImage(movie.backdrop_path)}
                ></img>
              </Link>
              <div className="content p-md-5">
                <Link to="/" className="item-link">
                  <h3>
                    {movie.title || movie.original_name || movie.original_title}
                  </h3>
                </Link>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  render() {
    const dataSlick = {
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      arrows: false,
      fade: true,
      autoPlay: true,
    };
    return (
      <Slider {...dataSlick} className="movie-slider">
        {this.renderMovies(this.state.movieList)}
      </Slider>
    );
  }
}

MovieSlider.propTypes = {
  movieList: PropTypes.array,
};

export default MovieSlider;
