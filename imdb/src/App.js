import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieListing from "./pages/MovieListing";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <div className="static top-0">
        <NavigationBar />
      </div>
      <Routes>
        <Route path="/" element={<MovieListing />} />
      </Routes>
    </>
  );
}

export default App;
