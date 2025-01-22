import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Display = ({ moviesList, handleDelete }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesList);
  }, [moviesList]);

  const handleOnClick = (mood) => {
    if (mood === "all") {
      setMovies(moviesList);
    } else {
      const filteredMovies = moviesList.filter((item) => item.mood === mood);
      setMovies(filteredMovies);
    }
  };

  return (
    <div className="container mt-3">
      <div className="bg-dark p-3">
        <div className="row text-white">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => handleOnClick("all")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleOnClick("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleOnClick("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">
            <h4> {movies.length} movies listed</h4>
          </div>
        </div>
        <div className="row">
          {movies.map((item, i) => (
            <div key={i} className="col">
              <MovieCard movieObj={item} handleOnDelete={handleDelete} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
