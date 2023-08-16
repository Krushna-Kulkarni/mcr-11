import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import MovieCard from "./../components/MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(MoviesContext);
  console.log(watchlist);
  return (
    <div className="p-2">
      <div className="flex gap-5 justify-evenly flex-wrap m-5 p-4 border-solid border-2 border-black">
        {watchlist?.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Watchlist;
