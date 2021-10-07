import React, { useContext } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [getmovies] = useContext(MovieContext);


  return (
    <div className="navbar">
      <li className="eachitems">Name</li>
      <li className="eachitems"></li>
      <li className="eachitems">List of Movies: {getmovies.length}</li>
    </div>
  );
};
export default Nav;
