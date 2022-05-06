import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// Here is your key: 95569281

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=95569281'

const movie1 = {
  "Title": 'El encanto del águila',
  "Year": '2011',
  "imdbID": 'tt2121467',
  "Type": 'series',
  "Poster": 'N/A'

}
const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (tittle) => {
    const response = await fetch(`${API_URL}&s=${tittle}`)
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Encanto');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}


export default App;
