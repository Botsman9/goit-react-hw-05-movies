import { useState, useEffect } from 'react';
import { fetchTrendMovies } from '../Services/movies-api';
import MovieCard from '../Page/MovieCard/MovieCard';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then(request => setMovies(request.results));
  }, []);

  return (
    <>
      <h1 className={s.title}> Trending today </h1>
      <MovieCard movies={movies} />
    </>
  );
}
