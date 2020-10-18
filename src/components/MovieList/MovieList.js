import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MovieItem from "../MovieItem/MovieItem";
import { Pagination } from "antd";
import Slider from "react-slick";
import { stringToSlug } from "../../constants/helper";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import "./style.scss";
function MovieList(props) {
  const [movieList, setMovieList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    total_results: 0,
    total_pages: 0,
  });
  const [filter, setFilter] = useState(() => props.filter);
  const { fetchFunction, listMode, imageType, title, dataSlick, type } = props;
  var { className, options } = props;
  //userEffect
  useEffect(() => {
    let isCancelled = false;
    fetchFunction({ filter: { ...filter }, type, ...options })
      .then((resp) => {
        if (!isCancelled) {
          if (resp.status !== 200) {
            return;
          }
          setMovieList(resp.data.results);
          setPagination({
            ...pagination,
            page: resp.data.page,
            total_results: resp.data.total_results,
            total_pages: resp.data.total_pages,
          });
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.log("call api get movielist fail", err);
        }
      });
    return () => {
      isCancelled = true;
    };
  }, [filter, options]);

  useEffect(() => {
    setFilter(props.filter);
  }, [props.filter]);

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
            url={`/detail/${type ? type : "movie"}/${stringToSlug(
              title
            )}-${movie.id}`}
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

  const handlePaginationChange = (page) => {
    setFilter({ ...filter, page: page });
  };
  if (movieList.length < 1) {
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
      {props.pagination === true ? (
        <Pagination
          className="pagination"
          defaultCurrent={pagination.page}
          total={pagination.total_pages}
          defaultPageSize={5}
          showSizeChanger={false}
          onChange={(page) => handlePaginationChange(page)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

MovieList.propTypes = {
  listMode: PropTypes.string,
  title: PropTypes.string,
  imageType: PropTypes.string,
  fetchFunction: PropTypes.func.isRequired,
  className: PropTypes.string,
};
MovieList.defaultProps = {
  type: "movie",
  fetchFunction: TheMovieDBApi.getMovieList,
  filter: {},
};

export default MovieList;
