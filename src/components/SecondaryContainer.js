import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector(store =>store.movies);
  return (
    movies.nowPlayingMovies&&(
    <div className=' bg-black'>
      <div className='-mt-52 pl-10 relative z-20'>
      <MovieList title="NowPlaying" movies={movies.nowPlayingMovies}/>
      <MovieList title="Trending" movies={movies.trendingMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies}/>
      <MovieList title="Horror" movies={movies.nowPlayingMovies}/>
      </div>
      </div>
  )
);
};

export default SecondaryContainer 