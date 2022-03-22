const API_KEY = 'a8667995004f1618098a3acfcfde7ac0';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovie(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getTrendingMovie() {
  return fetchMovie(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

export function searchMovies(query, page = 1) {
  return fetchMovie(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
}

export function getMovieDetails(id) {
  return fetchMovie(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
}

export function getMovieCredits(id) {
  return fetchMovie(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function getMovieReviews(id, page = 1) {
  return fetchMovie(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
}
