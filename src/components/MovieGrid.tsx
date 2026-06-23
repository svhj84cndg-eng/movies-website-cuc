import Link from 'next/link';
import { Movie } from '@/types/movie';

interface MovieGridProps {
  movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
  if (movies.length === 0) {
    return (
      <div className="text-center py-16 text-neutral-500">
        <svg className="mx-auto h-12 w-12 text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-lg">没有找到匹配的电影</p>
        <p className="text-sm mt-1">尝试调整搜索关键词</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link
          key={movie.title}
          href={`/movie/${encodeURIComponent(movie.title)}`}
          className="group bg-white rounded-lg border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div className="aspect-[2/3] bg-neutral-100 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute top-3 right-3 bg-neutral-900/90 text-white text-sm font-medium px-2.5 py-1 rounded">
              {movie.rating.toFixed(1)}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-1 mb-1">
              {movie.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-neutral-500">
              <span className="whitespace-nowrap">{movie.year}</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">{movie.duration} 分钟</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {movie.genre.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-0.5 text-xs text-neutral-600 bg-neutral-100 rounded"
                >
                  {genre}
                </span>
              ))}
              {movie.genre.length > 2 && (
                <span className="px-2 py-0.5 text-xs text-neutral-500 bg-neutral-100 rounded">
                  +{movie.genre.length - 2}
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}