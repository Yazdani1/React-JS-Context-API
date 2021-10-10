import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const items  = [
    {
      name: "Harry Portar",
      price: "$10",
      id: "12565",
    },
    {
      name: "Game of thrones",
      price: "$10",
      id: "53698",
    },
    {
      name: "Inception",
      price: "$10",
      id: "58986",
    },
  ];

  const products = [
    {
      pname:"T-shirt",
      pprice: 10
    },
    {
      pname:"Jacket",
      pprice: 85
    },
  ];

  const [movies, setMovies] = useState(items);
  const [listofproduct,setProducts] = useState(products);

  return (
    <MovieContext.Provider value={[movies, setMovies],[listofproduct,setProducts]}>
      {props.children}
    </MovieContext.Provider>
  );
};
