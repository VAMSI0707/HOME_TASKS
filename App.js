import { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import MovieList from './components/movie-list';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=7dce8cbbb5b337720205ad7084becde5&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
}






export default App;
