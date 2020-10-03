import React, { Component } from "react";
import { getMovieTrending } from "../../apis/TheMovieDBApi";
import MovieList from "../../components/MovieList/MovieList";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingList: [],
    };
  }
  componentDidMount() {
    getMovieTrending()
      .then((resp) => {
        if (resp.status !== 200) {
          return;
        }
        this.setState({
          trendingList: resp.data.results,
        });
      })
      .catch((err) => console.log(err));
  }
  renderTrending = () => {
    var { trendingList } = this.state;
    return <MovieList movieList={trendingList} type="slider"></MovieList>;
  };
  render() {
    return <div>{this.renderTrending()}</div>;
  }
}
