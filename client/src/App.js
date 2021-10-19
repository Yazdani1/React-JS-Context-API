import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import Another from "./Another";
import Product from "./Product";
import { ProductProvider } from "./ProductContext";
import React from "react";

function App() {
  return (
    <ProductProvider>
      <MovieProvider>
        <React.Fragment>
          <Nav />
          <MovieList />
          <Another />
          <Product />
        </React.Fragment>
      </MovieProvider>
    </ProductProvider>
  );
}

export default App;
