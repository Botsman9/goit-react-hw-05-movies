import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SearchBar from '../Page/Searchbar/Searchbar';
import MovieCard from '../Page/MovieCard/MovieCard';
import { fetchMovieSearch } from '../Services/movies-api';

const Reviews = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovieSearch(query).then(request => {
      if (!request.results.length) {
        toast.error('Try again');
        return;
      }
      setMovies(request.results);
    });
  }, [query]);

  const onClick = request => {
    setQuery(request);
  };

  return (
    <>
      <SearchBar onClick={onClick} />
      {movies && <MovieCard movies={movies} />}
    </>
  );
};

export default Reviews;
