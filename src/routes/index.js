import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
const routes = [
  {
    path: "/",
    exact: true,
    component: () => <HomePage></HomePage>,
  },
  {
    path: "/movie-detail/:type/:movieId",
    exact: true,
    component: ({match}) => <MovieDetailPage match={match}></MovieDetailPage>,
  },
  {
    path: "/category/:type/:categoryName",
    exact: true,
    component: ({match}) => <CategoryPage match={match}></CategoryPage>,
  },
  {
    path: "/category/:type",
    exact: true,
    component: ({match}) => <CategoryPage match={match}></CategoryPage>,
  },
];

export default routes;
