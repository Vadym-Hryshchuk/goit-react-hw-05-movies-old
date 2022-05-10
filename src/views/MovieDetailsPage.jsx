import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import * as fetchMovie from '../services/fetchMovieAPI';
import defaultPoster from '../defaultData/defaultMovie.svg';
import MainContent from '../components/MainContent/MainContent';
import MovieDetailsLink from '../components/MovieDetailsLink/MovieDetailsLink';
import BtnGoBack from '../components/BtnGoBack/BtnGoBack';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const createSRC = posterPath => {
    if (!posterPath) {
      return defaultPoster;
    }
    return `https://image.tmdb.org/t/p/w500//${posterPath}`;
  };

  const createGenresList = genres => {
    const genresList = [];
    if (!genres ?? genres.length === 0) {
      return;
    }
    genres.map(genre => genresList.push(genre.name));
    return genresList.join(' ');
  };

  useEffect(() => {
    fetchMovie.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <BtnGoBack onClick={goBack} />
      <MainContent
        movie={movie}
        src={createSRC}
        genresList={createGenresList}
      />
      <MovieDetailsLink state={{ from: location?.state?.from }} />
      <Outlet />
    </>
  );
}
