import React from "react";

const MovieCard = ({ movieObj, handleOnDelete, handleMovieToList }) => {
  const { Title, Poster, imdbRating, Plot, mood, imdbID } = movieObj;

  return (
    <div className="container movie-card">
      <div className="row mt-5 p-3 text-black">
        <div className="col">
          <img src={Poster} alt="" />
        </div>
        <div className="col">
          <h3>
            <b>{Title}</b>
          </h3>
          <p>IMDB Rating: {imdbRating}</p>
          <p>{Plot}</p>
          {!mood && (
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-warning"
                onClick={() => handleMovieToList("drama")}
              >
                Drama
              </button>

              <button
                className="btn btn-primary"
                onClick={() => handleMovieToList("action")}
              >
                Action
              </button>
            </div>
          )}
          <div className="d-grid mt-2">
            <button
              className="btn btn-danger"
              onClick={() => handleOnDelete(imdbID)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
