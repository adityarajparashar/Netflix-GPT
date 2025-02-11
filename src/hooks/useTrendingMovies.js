import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();


  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
  getTrendingMovies();
  }, []);
};

export default useTrendingMovies;