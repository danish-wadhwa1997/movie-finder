import { get } from "axios";
import { BASE_URL } from "./Contants";
export const getMovies = (value) => {
  return get(
    BASE_URL + `s=${value}&apikey=${process.env.REACT_APP_MOVIE_FINDER_API_KEY}`
  );
};

export const getMovieDetails = (id) => {
  return get(
    BASE_URL + `i=${id}&apikey=${process.env.REACT_APP_MOVIE_FINDER_API_KEY}`
  );
};
