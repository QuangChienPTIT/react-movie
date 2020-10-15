import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./style.scss";
import { HeartFilled, ShareAltOutlined } from "@ant-design/icons";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { Link } from "react-router-dom";

function MovieDetail(props) {
  const [state, setState] = useState({ movieDetail:{}, movieVideo:{}, casts:null, crews:null });
  const { casts, crews, movieDetail, movieVideo } = state;
  const { movieId } = props;

  const getData = async () => {
    const movieDetailRes = await TheMovieDBApi.getMovieDetail(movieId, "vi");
    const movieVideoRes = await TheMovieDBApi.getMovieVideo(movieId);
    const movieCastRes = await TheMovieDBApi.getMovieCast(movieId);
    setState({
      movieDetail: movieDetailRes.data,
      movieVideo: movieVideoRes.data,
      movieCast: movieCastRes.data.cast,
      movicrewseCast: movieCastRes.data.crew,
    });
  };
  useEffect(() => {
    getData();
  }, [props.movieId]);

  //render genres of movie
  const renderGenres = () => {
    const { genres } = movieDetail;
    var result = "";
    if (!Array.isArray(genres)) {
      return;
    }
    result = genres.map((genre, index) => {
      return (
        <Link key={index} to="/">
          {genre.name}
          {index < genres.length - 1 ? ", " : ""}
        </Link>
      );
    });
    return result;
  };

  //render cast of movie
  const renderCast = () => {
    var result = "";
    if (!Array.isArray(casts)) {
      return;
    }
    result = casts.map((cast, index) => {
      if (index >= 2) {
        return "";
      }
      return (
        <Link key={index} to="/">
          {cast.name}
          {index < casts.length - 1 && index < 1 ? ", " : ""}
        </Link>
      );
    });
    return result;
  };

  //render director of movie
  const renderDirector = () => {
    if (!Array.isArray(crews) || crews.length < 1) {
      return;
    }
    var director = crews.find((crew) => {
      if (crew.job.toLowerCase() === "director") {
        return crew;
      }
      return "";
    });
    if (director) {
      return <Link to="/">{director.name}</Link>;
    }
  };

  //render country of movie
  const renderCountry = () => {
    const { production_countries } = movieDetail;
    var result = "";
    if (production_countries) {
      result = production_countries.map((country, index) => {
        return (
          <Link to="" key={index}>
            {country.name}
            {index < production_countries.length - 1 && index < 1 ? ", " : ""}
          </Link>
        );
      });
    }
    return result;
  };
  if (Object.keys(movieDetail) < 1) {
    return "";
  }
  return (
    <>
      <div className="global-image">
        <figure
          style={{
            backgroundImage: `url(${TheMovieDBApi.getMovieImage(
              movieDetail.backdrop_path
            )})`,
          }}
        ></figure>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/watch?v=${
            movieVideo.key ? movieVideo.key : ""
          }`}
        >
          <i className="fas fa-play"></i>
        </a>
      </div>
      <div className="container">
        <div className="movie-detail row mt-md-3 p-3">
          <div className="col-md-8 p-0 p-md-3">
            <div className="row">
              <div className="col-md-3 d-none d-md-block p-0 ">
                <img
                  className="rounded"
                  src={
                    movieDetail.poster_path
                      ? TheMovieDBApi.getMovieImage(movieDetail.poster_path)
                      : ""
                  }
                  alt={movieDetail.title}
                ></img>
              </div>
              <div className="detail-content col-12 col-md-9">
                <h3>{movieDetail.title}</h3>
                <div className="detail-action">
                  <Button type="secondary" icon={<HeartFilled />}>
                    Theo dõi
                  </Button>
                  <Button
                    type="danger"
                    icon={<ShareAltOutlined />}
                    className="ml-2"
                  >
                    Chia sẻ
                  </Button>
                </div>
                <div className="detail-description mt-3">
                  <div className="rate d-flex align-items-center mb-2">
                    <h6 className="m-0 mr-2">Rating : </h6>
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      {movieDetail.vote_average}
                    </span>
                  </div>
                  {movieDetail.overview ? (
                    <>
                      <h6>Nội dung</h6>
                      <p>{movieDetail.overview}</p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="detail-options col-md-4 p-0 p-md-3">
            <table>
              <tbody>
                <tr>
                  <td>Thời lượng</td>
                  <td>{movieDetail.runtime} phút</td>
                </tr>
                <tr>
                  <td>Đạo diễn</td>
                  <td>{renderDirector()}</td>
                </tr>
                <tr>
                  <td>Diễn viên</td>
                  <td>{renderCast()}</td>
                </tr>
                <tr>
                  <td>Quốc gia</td>
                  <td>{renderCountry()}</td>
                </tr>
                <tr>
                  <td>Thể loại</td>
                  <td>{renderGenres()}</td>
                </tr>
                <tr>
                  <td>Phát hành</td>
                  <td>
                    {movieDetail.release_date
                      ? movieDetail.release_date.slice(0, 4)
                      : ""}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

MovieDetail.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetail;
