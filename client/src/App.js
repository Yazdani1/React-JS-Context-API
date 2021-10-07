import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import Another from "./Another";

function App() {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
        <Another/>
      </div>
  </MovieProvider>
  );
}

export default App;
