import { Movie, MoviesData } from '@/types/movie';
import moviesData from '@/../public/movies.json';

let moviesCache: Movie[] | null = null;

export async function getMovies(): Promise<Movie[]> {
  if (moviesCache) return moviesCache;
  moviesCache = moviesData.movies;
  return moviesCache;
}

export async function getMovieByTitle(title: string): Promise<Movie | undefined> {
  const movies = await getMovies();
  return movies.find((m) => m.title === title);
}

export function searchMovies(movies: Movie[], query: string): Movie[] {
  if (!query.trim()) return movies;

  const lowerQuery = query.toLowerCase().trim();
  return movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(lowerQuery);
    const directorMatch = movie.director.name.toLowerCase().includes(lowerQuery);
    const genreMatch = movie.genre.some((g) => g.toLowerCase().includes(lowerQuery));
    return titleMatch || directorMatch || genreMatch;
  });
}

export function getAllGenres(movies: Movie[]): string[] {
  const genres = new Set<string>();
  movies.forEach((movie) => movie.genre.forEach((g) => genres.add(g)));
  return Array.from(genres).sort();
}

export function getAllYears(movies: Movie[]): number[] {
  const years = new Set<number>();
  movies.forEach((movie) => years.add(movie.year));
  return Array.from(years).sort((a, b) => b - a);
}