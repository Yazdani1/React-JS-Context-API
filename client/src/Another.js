import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./App.css";

const Another = () => {
  const [allmovies, setAllmovies] = useContext(MovieContext);

  return (
    <div className="another">
      <h1>Total movies: {allmovies.length}</h1>
      {allmovies.map((movie) => (
        <div>
          <h5>{movie.name}</h5>
          <h5>{movie.price}</h5>
          <h5>{movie.name}</h5>
        </div>
      ))}
    </div>
  );
};
export default Another;
