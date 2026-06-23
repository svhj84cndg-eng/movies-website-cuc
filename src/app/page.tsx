import { Metadata } from 'next';
import { MovieClient } from './MovieClient';
import { getMovies } from '@/lib/movies';

export const metadata: Metadata = {
  title: '经典电影浏览',
  description: '浏览和搜索经典电影',
};

export default async function Home() {
  const movies = await getMovies();
  return <MovieClient initialMovies={movies} />;
}