import React, { useContext } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";
import { ProductContext } from "./ProductContext";

const Nav = () => {
  const [getmovies] = useContext(MovieContext);
  const [allProducts] = useContext(ProductContext);


  return (
    <div className="navbar">
      <li className="eachitems">Name</li>
      <li className="eachitems">Total Products: {allProducts.length}</li>
      <li className="eachitems">List of Movies: {getmovies.length}</li>
    </div>
  );
};
export default Nav;
