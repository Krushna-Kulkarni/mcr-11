import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";

const NavigationBar = () => {
  const { searchTextHandler, searchText } = useContext(MoviesContext);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center gap-8 bg-slate-600 text-white">
      <div className="p-2">IMDB</div>
      <div className="p-2 w-fit">
        <input
          onChange={(e) => {
            searchTextHandler(e.target.value);
            navigate("/");
          }}
          type="text"
          value={searchText}
          placeholder="Search movies by title, cast, director"
          className="p-2 text-sm text-black w-[600px]"
        />
      </div>
      <div className="p-2">
        <ul className="flex items-center">
          <li className="p-1">Movies</li>
          <li className="p-1">Watchlist</li>
          <li className="p-1">Starred Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
