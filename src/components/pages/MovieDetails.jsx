import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, Suspense } from 'react';
import { getFilmDetails } from 'API';
import {
  Wrapper,
  BackLink,
  MovieContainer,
  MovieImage,
  MovieInfo,
  Title,
  Rating,
  Overview,
  Genres,
  GenreList,
  LinksContainer,
  LinksList,
  LinkItem,
} from 'styles/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    const requestFunc = async () => {
      const response = await getFilmDetails(movieId);
      setMovie(response.data);
    };
    requestFunc();
  }, []);

  const position = useRef(location.state?.from ?? '/');

  return (
    <Wrapper>
      <BackLink to={position.current}>Back to list</BackLink>
      <MovieContainer>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
        <MovieInfo>
          <Title>{movie.original_title}</Title>
          <Rating>{movie.vote_average}</Rating>
          <Overview>Overview</Overview>
          <p>{movie.overview}</p>
          <Genres>Genres</Genres>
          <GenreList>{movie.genres?.map(genre => `${genre.name} `)}</GenreList>
        </MovieInfo>
      </MovieContainer>
      <LinksContainer>
        <LinksList>
          <LinkItem>
            <Link to={`cast`}>Cast</Link>
          </LinkItem>
          <LinkItem>
            <Link to={`reviews`}>Reviews</Link>
          </LinkItem>
        </LinksList>
      </LinksContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default MovieDetails;
