import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpcomingingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingingMovies(json.results));
  };

  useEffect(() => {
  getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;