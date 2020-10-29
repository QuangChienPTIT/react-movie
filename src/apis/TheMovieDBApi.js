import { THEMOVIEDB_API_KEY, THEMOVIEDB_API_URL } from "../constants/index";
import AxiosService from "../commons/AxiosService";
import { THEMOVIEDB_GENRES } from "../constants/index";
import merge from "deepmerge";
import queryString from "query-string";

export const getMovieTrending = (options={}) => {
  const default_options = {
    media_type: "tv",
    time_window: "day",
  };
  //marge filter
  const parsed_options = merge(default_options, options);
  const { media_type, time_window } = parsed_options;
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/trending/${media_type}/${time_window}?api_key=${THEMOVIEDB_API_KEY}&adult=false`
  );
};

export const getMovieSpecialList = (options) => {
  const default_options = {
    filter: { language: "vi", page: 1 },
    type: "movie",
  };
  //merge filter
  const parsed_options = merge(default_options, options);
  //get filter url
  if (THEMOVIEDB_GENRES[parsed_options.filter["with_genres"]]) {
    parsed_options.filter["with_genres"] =
      THEMOVIEDB_GENRES[parsed_options.filter["with_genres"]].id;
  }
  const stringified = queryString.stringify(parsed_options.filter);
  const { type, keyword } = parsed_options;
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/${type}/${keyword}?api_key=${THEMOVIEDB_API_KEY}${
      stringified ? `&${stringified}` : ""
    }`
  );
};

export const getMovieRelatedList = (options) => {
  const default_options = {
    filter: { language: "vi" },
    type: "movie",
  };
  //merge filter
  const parsed_options = merge(default_options, options);
  const { type, movieId, keyword } = parsed_options;
  const stringified = queryString.stringify(parsed_options.filter);
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/${type}/${movieId}/${keyword}?api_key=${THEMOVIEDB_API_KEY}${
      stringified ? `&${stringified}` : ""
    }`
  );
};

export const getMovieList = (options) => {
  const default_options = {
    filter: { language: "vi", page: 1 },
    type: "movie",
  };
  //merge filter
  const parsed_options = merge(default_options, options);
  //get filter url
  if (THEMOVIEDB_GENRES[parsed_options.filter["with_genres"]]) {
    parsed_options.filter["with_genres"] =
      THEMOVIEDB_GENRES[parsed_options.filter["with_genres"]].id;
  }
  const stringified = queryString.stringify(parsed_options.filter);
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/discover/${
      parsed_options.type
    }?api_key=838ee94b4d4b50e41f33d7b1d6d3655d${
      stringified ? `&${stringified}` : ""
    }`
  );
};

export const getMovieDetail = (movieId, language = "vi", type = "movie") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/${type}/${movieId}?api_key=${THEMOVIEDB_API_KEY}&language=${language}`
  );
};

export const getMovieCast = (movieId, type = "movie") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/${type}/${movieId}/credits?api_key=${THEMOVIEDB_API_KEY}`
  );
};

export const getGenresMovieList = (language = "vi") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/genre/movie/list?api_key=${THEMOVIEDB_API_KEY}&language=${language}`
  );
};

export const getMovieImage = (img, size = "original") => {
  if (img) {
    return `https://image.tmdb.org/t/p/${size}${img}`;
  }
};

export const getMovieVideo = (movide_id, type = "movie") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/${type}/${movide_id}/videos?api_key=838ee94b4d4b50e41f33d7b1d6d3655d&language=en-Us`
  );
};
