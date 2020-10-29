import React, { useState, useEffect, useReducer } from "react";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import MovieList from "../../components/MovieList/MovieList";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { LoadingOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { compose } from "redux";
import { Pagination } from "antd";
import { withRouter } from "react-router-dom";
import { setProgressBar } from "../../store/actions";
import "./style.scss";

const initState = {
  movieList: [],
  trendingList: [],
  isLoading: false,
  pagination: {
    page: 1,
    total_results: 0,
    total_pages: 0,
  },
};
const initReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_MOVIE":
      return { ...initState };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        ...action.payload,
      };
    case "UPDATE_MOVIELIST":
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

function CategoryPage(props) {
  //get category
  const { match } = props;
  //get data from router
  const category = match.params.categoryName;
  const type = match.params.type;
  //filter for movieList
  const [filter, setFilter] = useState(() => {
    return { with_genres: category };
  });
  //create reducer
  const [state, dispatch] = useReducer(initReducer, initState);
  //variable check when componentwillunmount
  let isComponentUnmounted = false;
  //fetch all data
  useEffect(() => {
    //open loading bar
    props.setProgressBar("OPEN");
    let movieListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: category,
      },
    });
    let trendingListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: category,
      },
    });
    Promise.all([movieListFetch, trendingListFetch]).then((datas) => {
      if (isComponentUnmounted === false) {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: {
            movieList: datas[0].data.results,
            trendingList: datas[1].data.results,
            pagination: {
              page: datas[0].data.page,
              total_results: datas[0].data.total_results,
              total_pages: datas[0].data.total_pages,
            },
          },
        });
      }

      //close loading bar
      props.setProgressBar("CLOSE");
    });
    return () => {
      isComponentUnmounted = true;
    };
  }, [type, category]);

  //update when filter change
  useEffect(() => {
    TheMovieDBApi.getMovieList({
      filter,
    }).then((resp) => {
      if (isComponentUnmounted === false) {
        dispatch({ type: "UPDATE_MOVIELIST", payload: resp.data.results });
      }
    });
  }, [filter]);

  //handle for change page
  const handlePaginationChange = (page) => {
    setFilter({ ...filter, page: page });
  };

  //return not found
  if (Array.isArray(state.movieList) && state.movieList.length === 0) {
    return (
      <div className="container film-null">
        <LoadingOutlined></LoadingOutlined>
      </div>
    );
  }
  return (
    <div className="container">
      <MovieSlider
        className="mt-md-3"
        movieList={state.trendingList}
        type={type}
      ></MovieSlider>
      <MovieList
        movieList={state.movieList}
        pagination={true}
        type={type}
      ></MovieList>
      <Pagination
        className="pagination"
        defaultCurrent={state.pagination.page}
        total={state.pagination.total_pages}
        defaultPageSize={5}
        showSizeChanger={false}
        onChange={(page) => handlePaginationChange(page)}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProgressBar: (isOpen) => dispatch(setProgressBar(isOpen)),
  };
};
export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(CategoryPage);
