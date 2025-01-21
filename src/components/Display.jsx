import React from "react";
import MovieCard from "./MovieCard";

const Display = () => {
  return (
    <div className="container mt-3">
      <div className="bg-dark p-3">
        <div className="row text-white">
          <div className="col">
            <button className="btn btn-primary">All</button>
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-danger">Action</button>
          </div>
          <div className="mt-3">
            <h4> 2 movies listed</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">{/* <MovieCard /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
