import PropTypes from 'prop-types';
import { Container, PosterImg, Wrapper } from './MainContent.styled';

export default function MainContent({ movie, src, genresList }) {
  const { poster_path, title, name, vote_average, overview, genres } = movie;
  return (
    <main>
      <Container>
        <PosterImg src={src(poster_path)} alt={title ?? name} />
        <Wrapper>
          <h1>{title ?? name}</h1>
          <p>
            <span>{`User Score: ${vote_average}`}</span>
          </p>
          <h2>Owerview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genresList(genres)}</p>
        </Wrapper>
      </Container>
    </main>
  );
}

MainContent.propTypes = {
  src: PropTypes.func.isRequired,
  genresList: PropTypes.func.isRequired,
};
