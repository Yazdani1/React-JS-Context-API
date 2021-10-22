import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [getmovies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {getmovies ? (
        getmovies.map((item) => (
          <>
            <Movie name={item.name} price={item.price} id={item.id} />
            <Movie name={item.name} price={item.price} id={item.id} />
          </>
        ))
      ) : (
        <h1>Loading..</h1>
      )}
    </div>
  );
};

export default MovieList;
