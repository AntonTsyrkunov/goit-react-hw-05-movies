import { useState, useEffect } from 'react';
import { getTrending } from 'API';
import {
  Container,
  Heading,
  List,
  ListItem,
  MovieLink,
  Image,
} from 'styles/Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestFunc = async () => {
      const response = await getTrending();
      setMovies(response.data.results);
    };
    requestFunc();
  }, []);

  return (
    <Container>
    <Heading>Trending today</Heading>
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </MovieLink>
          <Image
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title || movie.name}
          />
        </ListItem>
      ))}
    </List>
  </Container>
  );
};

export default Home;

