import React, { Component } from "react";
import { Button } from "antd";
import "./style.scss";
import { HeartFilled, ShareAltOutlined } from "@ant-design/icons";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import { Link } from "react-router-dom";

export default class MovieDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      casts: [],
      crews: [],
      movieDetail: {},
    };
  }

  getMovieDetail = () => {
    const { movieId } = this.props;
    this.setState({ movieId });
    TheMovieDBApi.getMovieDetail(movieId).then((resp) => {
      if (resp.status !== 200) {
        return;
      }
      this.setState({
        movieDetail: resp.data,
      });
    });
  };
  componentDidMount() {
    this.getMovieDetail();
    this.getCast();
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.movieId !== this.props.movieId) {
      this.getMovieDetail();
      this.getCast();
    }
  }

  renderGenres = () => {
    const { genres } = this.state.movieDetail;
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

  renderCast = () => {
    const { casts } = this.state;
    var result = "";
    if (!Array.isArray(casts)) {
      return;
    }
    result = casts.map((cast, index) => {
      if (index >= 2) {
        return;
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

  getCast = () => {
    const { movieId } = this.props;
    TheMovieDBApi.getMovieCast(movieId).then((resp) => {
      this.setState({
        casts: resp.data.cast,
        crews: resp.data.crew,
      });
    });
  };

  renderDirector = () => {
    const { crews } = this.state;
    if (!Array.isArray(crews) || crews.length < 1) {
      return;
    }
    var director = crews.find((crew) => {
      if (crew.job.toLowerCase() === "director") {
        return crew;
      }
    });
    if (director) {
      return <Link to="/">{director.name}</Link>;
    }
  };

  renderCountry = () => {
    const { production_countries } = this.state.movieDetail;
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

  render() {
    var { movieDetail } = this.state;
    return (
      <div className="movie-detail row mt-3 p-3" style={{background:`url(${TheMovieDBApi.getMovieImage(movieDetail.backdrop_path)}) no-repeat center`}}>
        <div className="col-md-8 row">
          <div className="col-md-3 d-none d-md-block p-0 ">
            <img
              className="rounded"
              src={
                movieDetail.poster_path
                  ? TheMovieDBApi.getMovieImage(movieDetail.poster_path)
                  : ""
              }
              alt="asd"
            ></img>
          </div>
          <div className="detail-content col-md-9 col-sm-12">
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
              <h6>Nội dung</h6>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
        <div className="detail-options col-md-4">
          <table>
            <tbody>
              <tr>
                <td>Thời lượng</td>
                <td>{movieDetail.runtime} phút</td>
              </tr>
              <tr>
                <td>Đạo diễn</td>
                <td>{this.renderDirector()}</td>
              </tr>
              <tr>
                <td>Diễn viên</td>
                <td>{this.renderCast()}</td>
              </tr>
              <tr>
                <td>Quốc gia</td>
                <td>{this.renderCountry()}</td>
              </tr>
              <tr>
                <td>Thể loại</td>
                <td>{this.renderGenres()}</td>
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
    );
  }
}
