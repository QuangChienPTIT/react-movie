import { THEMOVIEDB_API_KEY, THEMOVIEDB_API_URL } from "../constants/index";
import AxiosService from "../commons/AxiosService";

export const getMovieTrending = (
  media_type = "all",
  time_window = "day",
  language = "vi",
  page = 1,
  region = "vn"
) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/trending/${media_type}/${time_window}?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}&region=${region}`
  );
};

export const getMovieLatest = (language = "vi", page = 1, region = "vn") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/latest?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}&region=${region}`
  );
};

export const getMovieNowPlaying = (
  language = "vi",
  page = 1,
  region = "vn"
) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/now_playing?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}&region=${region}`
  );
};

export const getMovieTopRated = (language = "vi", page = 1, region = "vn") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/top_rated?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}&region=${region}`
  );
};

export const getMoviePopular = (language = "vi", page = 1, region = "vn") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/popular?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}&region=${region}`
  );
};

export const getMovieUpComing = (language = "vi", page = 1) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/upcoming?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}`
  );
};

export const getMovieImage = (img, size = "original") => {
  if (typeof img != "undefined") {
    return `https://image.tmdb.org/t/p/${size}${img}`;
  }
};

export const getMovieRecommendations = (movieId, language = "vi", page = 1) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/${movieId}/recommendations?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}`
  );
};

export const getMovieSimilar = (movieId, language = "vi", page = 1) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/${movieId}/similar?api_key=${THEMOVIEDB_API_KEY}&language=${language}&page=${page}`
  );
};

export const getMovieDetail = (movieId, language = "vi") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/${movieId}?api_key=${THEMOVIEDB_API_KEY}&language=${language}`
  );
};

export const getMovieCast = (movieId) => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/movie/${movieId}/credits?api_key=${THEMOVIEDB_API_KEY}`
  );
};
