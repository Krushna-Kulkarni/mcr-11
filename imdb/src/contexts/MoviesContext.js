import { createContext, useState } from "react";
import { movies } from "../backend/movies";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState(movies);
  const [starred, setStarred] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    genre: "All",
    year: "All",
    rating: "All",
  });
  console.log(filters.year);

  const genres = [
    ...new Set(
      allMovies.reduce((acc, curr) => {
        acc.push(...curr.genre);

        return acc;
      }, [])
    ),
  ];
  const releaseYears = [
    ...new Set(
      allMovies.reduce((acc, curr) => {
        acc.push(curr.year);

        return acc;
      }, [])
    ),
  ];
  const textFiltered =
    searchText === ""
      ? allMovies
      : allMovies.filter((movie) => {
          movie?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
            movie?.cast?.toLowerCase().includes(searchText.toLowerCase()) ||
            movie?.director?.toLowerCase().includes(searchText.toLowerCase());
        });

  const genreFiltered =
    filters?.genre === "All"
      ? textFiltered
      : textFiltered.filter((movie) => movie?.genre?.includes(filters?.genre));

  const yearFiltered =
    filters?.year === "All"
      ? genreFiltered
      : genreFiltered.filter((movie) => movie?.year === filters?.year);

  const ratingFiltered =
    filters?.rating === "All"
      ? yearFiltered
      : yearFiltered.filter((movie) => movie?.rating >= filters?.rating);

  const filteredMovies = ratingFiltered;
  const searchTextHandler = (text) => {
    setSearchText(text);
  };

  const genreFilter = (genre) => {
    setFilters({ ...filters, genre: genre });
  };
  const yearFilter = (year) => {
    setFilters({ ...filters, year: Number(year) });
  };
  const ratingFilter = (rating) => {
    setFilters({ ...filters, rating: Number(rating) });
  };

  const addToWatchList = (item) => {
    setWatchList([...watchList, item]);
  };
  const addToStarred = (item) => {
    setStarred([...starred, item]);
  };

  return (
    <MoviesContext.Provider
      value={{
        starred,
        watchList,
        addToWatchList,
        addToStarred,
        filteredMovies,
        genres,
        releaseYears,
        genreFilter,
        yearFilter,
        ratingFilter,
        searchTextHandler,
        searchText,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
