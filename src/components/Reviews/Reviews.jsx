import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchMovie from '../../services/fetchMovieAPI';
import { ReviewsList } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovie
      .getMovieReviews(movieId)
      .then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie!</p>
      )}
    </>
  );
}
