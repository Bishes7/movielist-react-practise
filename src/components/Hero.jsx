import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchedData } from "../axios";
import { randomChar } from "./random";

const Hero = () => {
  const [movieObj, setMovieObj] = useState({});

  const [bgImg, setBgImg] = useState("");

  const searchedRef = useRef("");

  useEffect(() => {
    fetchedMovie(randomChar());
  }, []);
  const movieImg = {
    backgroundImage: `url( ${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const fetchedMovie = async (str) => {
    const movie = await fetchedData(str);
    setMovieObj(movie);
    setBgImg(movie.Poster);
  };

  const handleOnSearch = () => {
    const str = searchedRef.current.value;
    fetchedMovie(str);
    searchedRef.current.value = "";
  };

  const handleOnDelete = () => {
    setMovieObj({});
  };
  return (
    <div>
      <nav className="py-3 text-warning fixed-top">
        <h1 className="container">Movie World</h1>
      </nav>

      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieImg}
      >
        <div className="hero-content">
          <div className="form-center">
            <div className="text-center content">
              <h2>Search Millions of Movies</h2>
              <p>FInd about the movies more ...</p>
            </div>
          </div>
          <div className="input-group mt-5">
            <input
              ref={searchedRef}
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleOnSearch}
            >
              Search
            </button>
          </div>
          <div className="movie-card-display">
            {Object.keys(movieObj).length > 0 ? (
              <MovieCard movieObj={movieObj} handleOnDelete={handleOnDelete} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
