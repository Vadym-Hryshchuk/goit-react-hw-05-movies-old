import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import * as fetchMovie from '../services/fetchMovieAPI';

// import { useLocation } from 'react-router-dom';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { pathname } = useLocation();

  const [movie, SetMovie] = useState([]);

  const createSRC = posterPath => {
    return `https://image.tmdb.org/t/p/w300//${posterPath}`;
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
    fetchMovie.gethMovieDetails(movieId).then(SetMovie);
  }, [movieId]);

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <img
          src={createSRC(movie.poster_path)}
          alt={movie.title ?? movie.name}
        />
        <div>
          <h1>{movie.title ?? movie.name}</h1>
          <p>
            <span>{`User Score: ${movie.vote_average}`}</span>
          </p>
          <h2>Owerview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{createGenresList(movie.genres)}</p>
        </div>
      </div>
      <NavLink to={`${pathname}/cast`}> Cast </NavLink>
      <NavLink to={`${pathname}/reviews`}> Reviews </NavLink>
      <Outlet />
    </main>
  );
}
