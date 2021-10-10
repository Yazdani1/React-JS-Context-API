import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import Another from "./Another";
import Product from "./Product";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <ProductProvider>
      <MovieProvider>
        <div>
          <Nav />
          <MovieList />
          <Another />
          <Product />
        </div>
      </MovieProvider>
    </ProductProvider>
  );
}

export default App;
