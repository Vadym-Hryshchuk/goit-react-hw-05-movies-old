import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
// import HomePage from '../views/HomePage';
// import MoviesPage from '../views/MoviesPage';
// import MovieDetailsPage from '../views/MovieDetailsPage';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';
import { Container } from './App.styled';

const HomePage = lazy(() => import('../views/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

function App() {
  return (
    <Container>
      <Suspense fallback={<h1>Завантаження...</h1>}>
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
      </Suspense>
    </Container>
  );
}

export default App;
