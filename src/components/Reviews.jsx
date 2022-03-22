import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovie from '../services/fetchMovieAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovie
      .getMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <ul>
      {reviews.map(reviews => (
        <li key={reviews.id}>
          <div>
            <p>{reviews.author}</p>
            <p>{reviews.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
