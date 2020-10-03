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
    path: "/d",
    exact: true,
    component: () => <MovieDetailPage></MovieDetailPage>,
  },
  {
    path: "/category/:categoryName",
    exact: true,
    component: () => <CategoryPage></CategoryPage>,
  },
];

export default routes;
