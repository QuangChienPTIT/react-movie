import React, { Component } from "react";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import MovieList from "../../components/MovieList/MovieList";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { THEMOVIEDB_GENRES } from "../../constants/index";
import { connect } from "react-redux";
import { setProgressBar } from "../../store/actions";

const dataSlickHoz = {
  slidesToShow: 4,
};
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.isComponentUnmounted = false;
    this.state = {
      actionList: [],
      popularList: [],
      topRateList: [],
      upcomingList: [],
      tvList: [],
      dramaList: [],
      comedyList: [],
      crimeList: [],
      trendingList: [],
    };
  }
  componentDidMount() {
    //open loading bar
    this.props.setProgressBar("OPEN");
    let actionListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: "action",
        language: "vi",
      },
    });
    let popularListFetch = TheMovieDBApi.getMovieSpecialList({
      keyword: "popular",
    });
    let topRateListFetch = TheMovieDBApi.getMovieSpecialList({
      keyword: "top_rated",
    });
    let upcomingListFetch = TheMovieDBApi.getMovieSpecialList({
      keyword: "upcoming",
    });
    let tvListFetch = TheMovieDBApi.getMovieList({
      type: "tv",
    });
    let dramaListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: "drama",
        language: "vi",
      },
    });
    let comedyListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: "comedy",
        language: "vi",
      },
    });
    let crimeListFetch = TheMovieDBApi.getMovieList({
      filter: {
        with_genres: "crime",
        language: "vi",
      },
      type: "tv",
    });
    let trendingListFetch = TheMovieDBApi.getMovieTrending();
    Promise.all([
      actionListFetch,
      popularListFetch,
      topRateListFetch,
      upcomingListFetch,
      tvListFetch,
      dramaListFetch,
      comedyListFetch,
      crimeListFetch,
      trendingListFetch,
    ]).then((datas) => {
      if (this.isComponentUnmounted === false) {
        this.setState({
          actionList: datas[0].data.results,
          popularList: datas[1].data.results,
          topRateList: datas[2].data.results,
          upcomingList: datas[3].data.results,
          tvList: datas[4].data.results,
          dramaList: datas[5].data.results,
          comedyList: datas[6].data.results,
          crimeList: datas[7].data.results,
          trendingList: datas[8].data.results,
        });
      }
      //close loading bar
      this.props.setProgressBar("CLOSE");
    });
  }

  componentWillUnmount() {
    this.isComponentUnmounted = true;
  }

  render() {
    return (
      <div className="container">
        <MovieSlider
          className="mt-md-3"
          movieList={this.state.trendingList}
        ></MovieSlider>
        <MovieList
          listMode="slider"
          title="Top phim hay"
          movieList={this.state.topRateList}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          movieList={this.state.actionList}
        ></MovieList>
        <MovieList
          listMode="slider"
          title="Được quan tâm"
          movieList={this.state.popularList}
        ></MovieList>
        <MovieList
          listMode="slider"
          title="Sắp ra mắt"
          movieList={this.state.upcomingList}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          title="Phim bộ"
          type="tv"
          movieList={this.state.tvList}
        ></MovieList>
        <MovieList
          listMode="slider"
          title={THEMOVIEDB_GENRES["drama"].name}
          movieList={this.state.dramaList}
        ></MovieList>
        <MovieList
          listMode="slider"
          title={THEMOVIEDB_GENRES["comedy"].name}
          movieList={this.state.comedyList}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          title={THEMOVIEDB_GENRES["crime"].name}
          type="tv"
          movieList={this.state.crimeList}
        ></MovieList>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProgressBar: (isOpen) => dispatch(setProgressBar(isOpen)),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
