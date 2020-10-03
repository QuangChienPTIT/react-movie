import { THEMOVIEDB_API_KEY, THEMOVIEDB_API_URL } from "../constants/index";
import AxiosService from "../commons/AxiosService";

export const getMovieTrending = (media_type = "all", time_window = "day") => {
  return AxiosService.get(
    `${THEMOVIEDB_API_URL}/trending/${media_type}/${time_window}?api_key=${THEMOVIEDB_API_KEY}`
  );
};
