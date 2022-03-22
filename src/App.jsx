import { Routes, Route } from 'react-router-dom';
// import * as fetchMovie from './services/fetchMovieAPI';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './components/Cast';
import Reviews from './components/Reviews';

function App() {
  // fetchMovie.getTrendingMovie().then(console.log);
  // fetchMovie.searchMovies().then(console.log);
  // fetchMovie.gethMovieDetails().then(console.log);
  // fetchMovie.gethMovieCredits().then(console.log);
  // fetchMovie.gethMovieReviews().then(console.log);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
