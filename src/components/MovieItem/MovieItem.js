import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { getMovieImage } from "../../apis/TheMovieDBApi";
import { Link } from "react-router-dom";
import "./style.scss";
import noImg from "./no-image.png";

MovieItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

function MovieItem(props) {
  const { title, id, poster, adult, url } = props;
  const image = getMovieImage(poster, "w500");
  return (
    <Card className="movie-item col-6 col-md-4 col-lg-2" bordered={false}>
      {adult ? <span className="adult">18+</span> : ""}
      <Link to={url} className="img">
        <img alt={title} src={image ? image : noImg}></img>
      </Link>
      <Link to={url}>
        <h3>{title}</h3>
      </Link>
    </Card>
  );
}

export default MovieItem;
