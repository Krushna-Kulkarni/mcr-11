import { createContext, useState } from "react";
import { movies } from "../backend/movies";

export const MoviesContext = createContext();
export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState(movies);
  const [starred, setStarred] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    textfilter: "",
    genre: "All",
    year: "All",
    rating: "All",
  });

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
  console.log({ ST: searchText });

  const genreFiltered =
    filters?.genre === "All"
      ? allMovies
      : allMovies?.filter((movie) => movie?.genre?.includes(filters?.genre));

  const yearFiltered =
    filters?.year === "All"
      ? genreFiltered
      : genreFiltered?.filter((movie) => movie?.year === filters?.year);

  const ratingFiltered =
    filters?.rating === "All"
      ? yearFiltered
      : yearFiltered?.filter((movie) => movie?.rating === filters?.rating);

  const textFiltered =
    searchText === ""
      ? ratingFiltered
      : ratingFiltered.filter((movie) => {
          return (
            movie?.title?.toLowerCase().includes(searchText.toLowerCase()) ||
            movie?.cast?.includes(searchText.toLowerCase()) ||
            movie?.director?.toLowerCase().includes(searchText.toLowerCase())
          );
        });

  console.log(textFiltered);

  const filteredMovies = textFiltered;

  const searchTextHandler = (text) => {
    setSearchText(text);
    setFilters({ ...filters, textfilter: text });
  };

  const genreFilter = (genre) => {
    setFilters({ ...filters, genre: genre });
  };
  const yearFilter = (year) => {
    year === "All"
      ? setFilters({ ...filters, year: year })
      : setFilters({ ...filters, year: Number(year) });
  };
  const ratingFilter = (rating) => {
    rating === "All"
      ? setFilters({ ...filters, rating: rating })
      : setFilters({ ...filters, rating: Number(rating) });
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
