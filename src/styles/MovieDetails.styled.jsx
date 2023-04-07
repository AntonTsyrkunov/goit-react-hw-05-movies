import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

export const BackLink = styled(Link)`
  background-color: #1c1c1c;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 50px;
`;

export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  margin-top: 20px;
`;

export const MovieImage = styled.img`
  margin-right: 2rem;
`;

export const MovieInfo = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

export const Rating = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Overview = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Genres = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const GenreList = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const LinksContainer = styled.div`
  margin-top: 2rem;
`;

export const LinksList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin-right: 2rem;
`;
