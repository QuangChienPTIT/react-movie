import React, { Component, Fragment } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import TvDetail from "../../components/TvDetail/TvDetail";
import MovieList from "../../components/MovieList/MovieList";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { withRouter } from "react-router-dom";

class MovieDetailPage extends Component {
  render() {
    const { match } = this.props;
    const { movieId, type } = match.params;

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
            fetchFunction={TheMovieDBApi.getMovieRelatedList}
            options={{ movieId, keyword: "recommendations" }}
            type={type}
            title="Nội dung liên quan"
          ></MovieList>
          <MovieList
            listMode="slider"
            title="Đề xuất"
            fetchFunction={TheMovieDBApi.getMovieRelatedList}
            options={{ movieId, keyword: "similar" }}
            type={type}
          ></MovieList>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(MovieDetailPage);
