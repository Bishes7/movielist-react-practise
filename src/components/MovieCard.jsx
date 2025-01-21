import React from "react";

const MovieCard = ({ movieObj }) => {
  const { Title, Poster, imdbRating, Plot } = movieObj;

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
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>

            <button className="btn btn-primary">Action</button>
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-danger">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
