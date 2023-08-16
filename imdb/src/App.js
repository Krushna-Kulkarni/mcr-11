import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieListing from "./pages/MovieListing";
import NavigationBar from "./components/NavigationBar";
import Starred from "./pages/Starred";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <>
      <div className="sticky top-0 w-full">
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
