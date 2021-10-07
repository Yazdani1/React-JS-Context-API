import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./App.css";

const Another = () => {
  const [allmovies, setAllmovies] = useContext(MovieContext);

  return (
    <div className="another">
      <h1>{allmovies && allmovies.name}</h1>
    </div>
  );
};
export default Another;
