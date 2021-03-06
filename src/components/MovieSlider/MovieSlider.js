import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { getMovieImage } from "../../apis/TheMovieDBApi";
import { stringToSlug } from "../../constants/helper";
import "./style.scss";

function MovieSlider(props) {
  const { movieList } = props;

  const renderMovies = (movieList) => {
    var result = "";
    const className = `movie-slide ${props.className}`;
    if (Array.isArray(movieList)) {
      result = movieList.map((movie, index) => {
        if (!movie.backdrop_path) {
          return "";
        }
        let title = movie.title || movie.original_name || movie.original_title;
        let movieUrl = `/detail/${
          movie.media_type ? movie.media_type : "movie"
        }/${stringToSlug(title)}-${movie.id}`;
        return (
          <div className={className} key={index}>
            <div>
              <Link to={movieUrl} className="slide-img">
                <img
                  alt={movie.title}
                  src={getMovieImage(movie.backdrop_path)}
                ></img>
              </Link>
              <div className="content p-3 px-md-5 py-md-3">
                <Link to={movieUrl} className="slide-link">
                  <h3>{title}</h3>
                </Link>
                <div className="rate d-flex align-items-center">
                  <p className="m-0 mr-2">Rating</p>
                  <span className="rounded-circle d-flex align-items-center justify-content-center">
                    {movie.vote_average}
                  </span>
                </div>
                <p className="d-none d-md-block">{movie.overview}</p>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };
  const dataSlick = {
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    fade: true,
    autoPlay: true,
  };
  return (
    <Slider {...dataSlick} className="movie-slider">
      {renderMovies(movieList)}
    </Slider>
  );
}

MovieSlider.propTypes = {
  movieList: PropTypes.array,
  classNmae: PropTypes.string,
};

export default MovieSlider;
