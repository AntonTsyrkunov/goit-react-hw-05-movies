import { getTheCast } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastCharacter, CastContainer, CastImage, CastList, CastListItem, CastTitle, CastName} from 'styles/Cast.styled'; 

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const requestFunc = async () => {
      const response = await getTheCast(movieId);
      setActors(response.data.cast);
    };
    requestFunc();
  }, [movieId]);

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {actors.map(actor => (
          <CastListItem key={actor.id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={`${actor.name}'s profile picture`}
            />
            <CastCharacter>Character: {actor.character}</CastCharacter>
            <CastName>Name: {actor.name}</CastName>
          </CastListItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
