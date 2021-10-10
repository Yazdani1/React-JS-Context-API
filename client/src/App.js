import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import Another from "./Another";
import Product from "./Product";

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
        <Another/>
        <Product/>
      </div>
  </MovieProvider>
  );
}

export default App;
