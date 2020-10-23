import React from "react";
import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import Slider from "react-slick";
import { stringToSlug } from "../../constants/helper";
import "./style.scss";
function MovieList(props) {
  const {
    movieList,
    listMode,
    imageType,
    title,
    dataSlick,
    type,
    className,
  } = props;
  const renderMovies = () => {
    var result = "";
    if (Array.isArray(movieList)) {
      result = movieList.map((movie, index) => {
        let title = movie.title || movie.original_name || movie.original_title;
        return (
          <MovieItem
            key={index}
            title={title}
            poster={
              imageType === "horizontal" && movie.backdrop_path
                ? movie.backdrop_path
                : movie.poster_path
            }
            adult={movie.adult}
            id={movie.id}
            url={`/detail/${type ? type : "movie"}/${stringToSlug(title)}-${
              movie.id
            }`}
          ></MovieItem>
        );
      });
    }
    return result;
  };
  var movieListEle = "";
  //get settings of slick plugin
  if (listMode === "slider") {
    const dataSlickDefault = {
      slidesToShow: 6,
      slidesToScroll: 1,
      swipe: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    movieListEle = (
      <Slider
        className={`movie-list ${className ? className : ""} ${
          imageType === "horizontal" ? "image-horizontal" : ""
        }`}
        {...Object.assign({}, dataSlickDefault, dataSlick)}
      >
        {renderMovies()}
      </Slider>
    );
  } else {
    movieListEle = <div className="grid row">{renderMovies()}</div>;
  }
  if (Array.isArray(movieList) && movieList.length < 1) {
    return "";
  }
  return (
    <div
      className={`movie-list ${className ? className : ""} ${
        imageType === "horizontal" ? "image-horizontal" : ""
      }`}
    >
      <h4 className="movie-list-title mt-3">{title}</h4>
      {movieListEle}
    </div>
  );
}

MovieList.propTypes = {
  listMode: PropTypes.string,
  title: PropTypes.string,
  imageType: PropTypes.string,
  movieList: PropTypes.array,
  className: PropTypes.string,
};
MovieList.defaultProps = {
  type: "movie",
};

export default React.memo(MovieList);
