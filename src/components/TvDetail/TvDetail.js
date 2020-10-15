import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { HeartFilled, ShareAltOutlined } from "@ant-design/icons";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { Link } from "react-router-dom";
function TvDetail(props) {
  const [state, setState] = useState({
    tvDetail: {},
    tvVideo: {},
    casts: null,
    crews: null,
  });
  const { casts, crews, tvDetail, tvVideo } = state;
  const { tvId } = props;

  //fetch data
  const getData = async () => {
    const tvDetailRes = await TheMovieDBApi.getMovieDetail(tvId, "vi", "tv");
    const tvVideoRes = await TheMovieDBApi.getMovieVideo(tvId, "tv");
    const tvCastRes = await TheMovieDBApi.getMovieCast(tvId, "tv");
    setState({
      tvDetail: tvDetailRes.data,
      tvVideo: tvVideoRes.data,
      casts: tvCastRes.data.cast,
      crews: tvCastRes.data.crew,
    });
  };
  
  //useEffect
  useEffect(() => {
    getData();
  }, [props.tvId]);

  //render genres of movie
  const renderGenres = () => {
    const { genres } = tvDetail;
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
    var director = tvDetail.created_by[0];
    if (director) {
      return <Link to="/">{director.name}</Link>;
    }
  };

  //render country of movie
  const renderCountry = () => {
    const { origin_country } = tvDetail;
    var result = "";
    if (origin_country) {
      result = origin_country.map((country, index) => {
        return (
          <Link to="" key={index}>
            {country}
            {index < origin_country.length - 1 && index < 1 ? ", " : ""}
          </Link>
        );
      });
    }
    return result;
  };
  if (Object.keys(tvDetail) < 1) {
    return "";
  }
  return (
    <>
      <div className="global-image">
        <figure
          style={{
            backgroundImage: `url(${TheMovieDBApi.getMovieImage(
              tvDetail.backdrop_path
            )})`,
          }}
        ></figure>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.youtube.com/watch?v=${
            tvVideo.key ? tvVideo.key : ""
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
                    tvDetail.poster_path
                      ? TheMovieDBApi.getMovieImage(tvDetail.poster_path)
                      : ""
                  }
                  alt={tvDetail.name}
                ></img>
              </div>
              <div className="detail-content col-12 col-md-9">
                <h3>
                  {tvDetail.name}
                  {tvDetail.original_name &&
                  tvDetail.original_name !== tvDetail.name
                    ? ` ( ${tvDetail.original_name} ) `
                    : ""}
                </h3>
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
                      {tvDetail.vote_average}
                    </span>
                  </div>
                  {tvDetail.overview ? (
                    <>
                      <h6>Nội dung</h6>
                      <p>{tvDetail.overview}</p>
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
                  <td>Số tập</td>
                  <td>{`${tvDetail.last_episode_to_air.episode_number}/${tvDetail.number_of_episodes}`}</td>
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
                    {tvDetail.first_air_date
                      ? tvDetail.first_air_date.slice(0, 4)
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

TvDetail.propTypes = {
  tvId: PropTypes.string.isRequired,
};

export default TvDetail;
