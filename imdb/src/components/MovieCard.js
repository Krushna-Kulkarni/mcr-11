import React, { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const MovieCard = ({ movie }) => {
  const { starred, watchList, addToWatchList, addToStarred } =
    useContext(MoviesContext);
  console.log(starred);
  const { title, summary, imageURL } = movie;
  return (
    <>
      <div className="w-52 h-84  shadow-lg rounded-md">
        <div>
          <img
            src={imageURL}
            alt="poster"
            className="w-52 h-52 object-cover overflow-hidden "
          />
        </div>
        <div className="flex flex-col p-2 py-4">
          <h1 className="text-xl text-center">{title}</h1>
          <div className="text-sm text-center">{summary}</div>
          <div className="flex justify-evenly">
            {starred.includes(movie) ? (
              <button className="text-sm p-1 bg-slate-600 text-white">
                Starred
              </button>
            ) : (
              <button
                onClick={() => addToStarred(movie)}
                className="text-sm p-1 bg-slate-600 text-white"
              >
                Star
              </button>
            )}
            {watchList.includes(movie) ? (
              <button className="text-sm p-1 bg-slate-600 text-white">
                Added to Watchlist
              </button>
            ) : (
              <button
                onClick={() => addToWatchList(movie)}
                className="text-sm p-1 bg-slate-600 text-white"
              >
                Add to Watchlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
