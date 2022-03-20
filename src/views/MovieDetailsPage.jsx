import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovie from '../services/fetchMovieAPI';

// import { useLocation } from 'react-router-dom';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, SetMovie] = useState([]);
  const createSRC = posterPath => {
    return `https://image.tmdb.org/t/p/w200//${posterPath}`;
  };

  useEffect(() => {
    fetchMovie.gethMovieDetails(movieId).then(data => {
      console.log(data);
      return SetMovie(data);
    });
  }, [movieId]);

  return (
    <main>
      <div>
        <img src={createSRC(movie.poster_path)} alt="" />
        <h1>Hello</h1>
      </div>
    </main>
  );
}
