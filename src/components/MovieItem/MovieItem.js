import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";

MovieItem.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

function MovieItem(props) {
  return (
    <Card className="movie-item">
      <a href="/">
        <img alt="Thanh xuan co cau" src="https://static.fptplay.net/static/img/share/video/24_09_2020/thanh-xuan-co-cau-poster24-09-2020_15g46-51.jpg?w=282&mode=scale"></img>
        <p>Thanh xuan co cau</p>
      </a>
    </Card>
  );
}

export default MovieItem;
