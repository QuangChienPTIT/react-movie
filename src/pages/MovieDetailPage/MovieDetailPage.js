import React, { Component, Fragment } from "react";
import MovieDetail from "../../containers/MovieDetail/MovieDetail";
import MovieList from "../../containers/MovieList/MovieList";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { withRouter } from "react-router-dom";

class MovieDetailPage extends Component {
  render() {
    const { match } = this.props;
    const movieId = match.params.movieId;
    return (
      <Fragment>
        <MovieDetail movieId={movieId}></MovieDetail>
        <MovieList
          listMode="slider"
          fetchFunction={() => TheMovieDBApi.getMovieTopRated()}
          title="Nội dung liên quan"
        ></MovieList>
      </Fragment>
    );
  }
}

export default withRouter(MovieDetailPage);
