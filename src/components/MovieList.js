import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    scrollRef.current.classList.add("active");
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    scrollRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      {/* Scrollable container with drag scrolling */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar p-4 cursor-grab active:cursor-grabbing"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
      >
        <div className="flex space-x-4 w-max">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
