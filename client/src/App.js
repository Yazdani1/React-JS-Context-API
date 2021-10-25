import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import Another from "./Another";
import Product from "./Product";
import { ProductProvider } from "./ProductContext";
import { PostProvider } from "./PostContext";
import React from "react";
import PostList from "./Postlist";

function App() {
  return (
    <PostProvider>
      <ProductProvider>
        <MovieProvider>
          <React.Fragment>
            <Nav />
            <PostList />
            {/* <MovieList />
          <Another />
          <Product /> */}
          </React.Fragment>
        </MovieProvider>
      </ProductProvider>
    </PostProvider>
  );
}

export default App;
