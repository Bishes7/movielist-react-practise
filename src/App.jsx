import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  const [moviesList, setmoviesList] = useState([]);

  const addToList = (movie) => {
    setmoviesList([...moviesList, movie]);
  };
  console.log(moviesList);

  const handleDelete = (imdbID) => {
    const deletedMovie = moviesList.filter((item) => item.imdbID !== imdbID);
    setmoviesList(deletedMovie);
  };

  return (
    <div className="wrapper">
      {/* Hero Section */}
      <Hero addToList={addToList} />

      {/* Display Section */}
      <Display moviesList={moviesList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
