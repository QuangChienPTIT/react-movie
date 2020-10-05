import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { getMovieImage } from "../../apis/TheMovieDBApi";
import { Link } from "react-router-dom";
import "./style.scss";

MovieItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

function MovieItem(props) {
  const { title, id, poster } = props;
  const movieUrl = `/movie-detail/${id}`;
  return (
    <Card className="movie-item" bordered={false}>
      <Link to={movieUrl} className="img">
        <img alt={title} src={getMovieImage(poster, "w500")}></img>
      </Link>
      <Link to={movieUrl}>
        <h3>{title}</h3>
      </Link>
    </Card>
  );
}

export default MovieItem;
