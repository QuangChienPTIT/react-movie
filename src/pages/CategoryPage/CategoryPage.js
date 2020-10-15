import React, { useState, useEffect } from "react";
import * as TheMovieDBApi from "../../apis/TheMovieDBApi";
import MovieList from "../../components/MovieList/MovieList";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
import { withRouter } from "react-router-dom";

function CategoryPage(props) {
  const { match } = props;
  const category = match.params.categoryName;
  const type = match.params.type;
  const [filter, setFilter] = useState({
    with_genres: category,
  });
  useEffect(() => {
    setFilter({
      with_genres: category,
    });
  }, [type, category]);
  return (
    <div className="container">
      <MovieSlider
        className="mt-md-3"
        fetchFunction={TheMovieDBApi.getMovieList}
        filter={filter}
        type={type}
      ></MovieSlider>
      <MovieList filter={filter} pagination={true} type={type}></MovieList>
    </div>
  );
}
export default withRouter(CategoryPage);
