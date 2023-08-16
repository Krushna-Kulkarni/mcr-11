import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import MovieCard from "./../components/MovieCard";

const MovieListing = () => {
  const {
    filteredMovies,
    genres,
    releaseYears,
    genreFilter,
    yearFilter,
    ratingFilter,
  } = useContext(MoviesContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center gap-2 border-solid border-2 border-black p-2">
        <h1 className="text-lg">Movies</h1>
        <div className="flex flex-row">
          <div className="p-1">
            <select onChange={(e) => genreFilter(e.target.value)}>
              <option value="All">All Genre</option>
              {genres.map((genre) => {
                return (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-1">
            <select onChange={(e) => yearFilter(e.target.value)}>
              <option value="All">Release Year</option>
              {releaseYears.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="p-1">
            <select onChange={(e) => ratingFilter(e.target.value)}>
              <option value="All">Rating</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((rating) => {
                return (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <button className="p-2 px-3 bg-slate-600 text-white">
            Add A Movie
          </button>
        </div>
      </div>
      <div className="flex gap-5 justify-evenly flex-wrap m-5 p-4 border-solid border-2 border-black">
        {filteredMovies?.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieListing;
