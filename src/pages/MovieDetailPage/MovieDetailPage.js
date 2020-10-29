import React, { useState, useEffect, Fragment } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import TvDetail from "../../components/TvDetail/TvDetail";
import MovieList from "../../components/MovieList/MovieList";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { setProgressBar } from "../../store/actions";

function MovieDetailPage(props) {
  const [state, setstate] = useState({});
  let isComponentUnmounted = false;

  const { match } = props;
  const { movieName, type } = match.params;
  const movieId = movieName.split("-").pop();
  let recommendationsListFetch = TheMovieDBApi.getMovieRelatedList({
    movieId,
    type,
    keyword: "recommendations",
  });
  let similarListFetch = TheMovieDBApi.getMovieRelatedList({
    movieId,
    type,
    keyword: "similar",
  });
  useEffect(() => {
    //open loading bar
    props.setProgressBar("OPEN");
    setstate({});
    Promise.all([recommendationsListFetch, similarListFetch]).then((datas) => {
      if (isComponentUnmounted === false) {
        setstate({
          recommendationsList: datas[0].data.results,
          similarList: datas[1].data.results,
        });
      }
      //close loading bar
      props.setProgressBar("CLOSE");
    });
    return () => {
      isComponentUnmounted = true;
    };
  }, [movieId]);
  return (
    <Fragment>
      {type === "tv" ? (
        <TvDetail tvId={movieId}></TvDetail>
      ) : (
        <MovieDetail movieId={movieId}></MovieDetail>
      )}
      <div className="container">
        <MovieList
          listMode="slider"
          type={type}
          title="Nội dung liên quan"
          movieList={state.recommendationsList}
        ></MovieList>
        <MovieList
          listMode="slider"
          title="Đề xuất"
          type={type}
          movieList={state.similarList}
        ></MovieList>
      </div>
    </Fragment>
  );
  // }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setProgressBar: (isOpen) => dispatch(setProgressBar(isOpen)),
  };
};
export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(MovieDetailPage);
