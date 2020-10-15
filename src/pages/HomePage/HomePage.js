import React, { Component } from "react";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import MovieList from "../../components/MovieList/MovieList";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { THEMOVIEDB_GENRES } from "../../constants/index";

const dataSlickHoz = {
  slidesToShow: 4,
};
export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <MovieSlider
          className="mt-md-3"
          fetchFunction={TheMovieDBApi.getMovieTrending}
        ></MovieSlider>
        <MovieList
          listMode="slider"
          title="Top phim hay"
          fetchFunction={TheMovieDBApi.getMovieSpecialList}
          options={{
            keyword: "top_rated",
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          title={THEMOVIEDB_GENRES["action"].name}
          filter={{
            with_genres: "action",
            language: "vi",
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          title="Được quan tâm"
          fetchFunction={TheMovieDBApi.getMovieSpecialList}
          options={{
            keyword: "popular"
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          title="Sắp ra mắt"
          fetchFunction={TheMovieDBApi.getMovieSpecialList}
          options={{
            keyword: "upcoming",
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          title="Phim bộ"
          type="tv"
        ></MovieList>
        <MovieList
          listMode="slider"
          title={THEMOVIEDB_GENRES["drama"].name}
          filter={{
            with_genres: "drama",
            language: "vi",
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          title={THEMOVIEDB_GENRES["comedy"].name}
          filter={{
            with_genres: "comedy",
            language: "vi",
          }}
        ></MovieList>
        <MovieList
          listMode="slider"
          imageType="horizontal"
          dataSlick={dataSlickHoz}
          title={THEMOVIEDB_GENRES["crime"].name}
          type="tv"
          filter={{
            with_genres: "crime",
            language: "vi",
          }}
        ></MovieList>
      </div>
    );
  }
}
