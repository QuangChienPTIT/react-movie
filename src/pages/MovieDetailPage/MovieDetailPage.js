import React, { Component, Fragment } from "react";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import TvDetail from "../../components/TvDetail/TvDetail";
import MovieList from "../../components/MovieList/MovieList";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { withRouter } from "react-router-dom";

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.isComponentUnmounted = false;
    this.state = {
      recommendationsList: [],
      similarList: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { movieName } = match.params;
    const movieId = movieName.split("-").pop();
    let recommendationsListFetch = TheMovieDBApi.getMovieRelatedList({
      movieId,
      keyword: "recommendations",
    });
    let similarListFetch = TheMovieDBApi.getMovieRelatedList({
      movieId,
      keyword: "similar",
    });
    Promise.all([recommendationsListFetch, similarListFetch]).then((datas) => {
      if (this.isComponentUnmounted === false) {
        this.setState({
          recommendationsList: datas[0].data.results,
          similarList: datas[1].data.results,
        });
      }
    });
  }

  componentWillUnmount() {
    this.isComponentUnmounted = true;
  }

  render() {
    const { match } = this.props;
    const { movieName, type } = match.params;
    const movieId = movieName.split("-").pop();
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
            movieList={this.state.recommendationsList}
          ></MovieList>
          <MovieList
            listMode="slider"
            title="Đề xuất"
            type={type}
            movieList={this.state.similarList}
          ></MovieList>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(MovieDetailPage);
