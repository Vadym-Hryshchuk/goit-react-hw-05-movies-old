import { Link } from 'react-router-dom';

export default function ListMovie({ movies }) {
  const createSRC = posterPath => {
    return `https://image.tmdb.org/t/p/w200//${posterPath}`;
  };

  return (
    <ul>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <img src={createSRC(poster_path)} alt={title ?? name} />
            <p>{title ?? name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
