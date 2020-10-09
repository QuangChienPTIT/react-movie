import React, { Component } from "react";
import MovieItem from "../../components/MovieItem/MovieItem";
import Slider from "react-slick";
import "./style.scss";

export default class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    var { fetchFunction } = this.props;
    fetchFunction().then((resp) => {
      if (resp.status !== 200) {
        return;
      }
      this.setState({
        movieList: resp.data.results,
      });
    });
  }
  //render movie with movie list
  renderMovies = (movieList) => {
    var result = "";
    if (Array.isArray(movieList)) {
      result = movieList.map((movie, index) => {
        return (
          <MovieItem
            key={index}
            title={movie.title || movie.original_name || movie.original_title}
            poster={movie.poster_path}
            id={movie.id}
          ></MovieItem>
        );
      });
    }
    return result;
  };
  render() {
    const { listMode, title } = this.props;
    const { movieList } = this.state;
    var movieListEle = "";
    //get settings of slick plugin
    if (listMode === "slider") {
      const dataSlick = {
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: true,
        arrows: false,
        infinite: false,
        mobileFirst:true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
      
      movieListEle = (
        <Slider {...dataSlick}>{this.renderMovies(movieList)}</Slider>
      );
    } else {
      movieListEle = (
        <div className="grid row">{this.renderMovies(movieList)}</div>
      );
    }
    return (
      <div className="movie-list">
        <h4 className="movie-list-title mt-3">{title}</h4>
        {movieListEle}
      </div>
    );
  }
}
