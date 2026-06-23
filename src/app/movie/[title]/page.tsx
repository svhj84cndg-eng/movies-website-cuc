import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMovieByTitle, getMovies } from '@/lib/movies';
import { MovieDetail } from '@/components/MovieDetail';

interface MoviePageProps {
  params: Promise<{ title: string }>;
}

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  const { title } = await params;
  const movie = await getMovieByTitle(decodeURIComponent(title));
  
  if (!movie) {
    return { title: '电影未找到' };
  }
  
  return {
    title: `${movie.title} - 经典电影`,
    description: movie.summary,
    openGraph: {
      title: movie.title,
      description: movie.summary,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((movie) => ({
    title: encodeURIComponent(movie.title),
  }));
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { title } = await params;
  const movie = await getMovieByTitle(decodeURIComponent(title));

  if (!movie) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <MovieDetail movie={movie} />
    </main>
  );
}