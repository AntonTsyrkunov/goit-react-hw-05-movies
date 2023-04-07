import { useState, useEffect } from 'react';
import { getSearchMovie } from 'API';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { MoviesWrapper, SearchForm, MoviesList } from 'styles/Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  const handleInputChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    setSearchParams({ name: query });
    setQuery('');
  };

  useEffect(() => {
    const requestFunc = async () => {
      const response = await getSearchMovie(name);
      setMovies(response.data.results);
      console.log(response.data.results);
    };
    if (name) {
      requestFunc();
    }
  }, [name]);

  return (
    <MoviesWrapper>
      <h1>Search movies</h1>
      <SearchForm onSubmit={handleSearch}>
        <input
          name="query"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </SearchForm>
      <MoviesList>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </MoviesList>
    </MoviesWrapper>
  );
};

export default Movies;
