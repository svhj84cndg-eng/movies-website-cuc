'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import { MovieSearch } from '@/components/MovieSearch';
import { MovieGrid } from '@/components/MovieGrid';
import { searchMovies } from '@/lib/movies';

interface MovieClientProps {
  initialMovies: Movie[];
}

export function MovieClient({ initialMovies }: MovieClientProps) {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(initialMovies);
  const [movies] = useState<Movie[]>(initialMovies);

  const handleSearch = (value: string) => {
    const results = searchMovies(movies, value);
    setFilteredMovies(results);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-light tracking-tight text-neutral-900">
              经典电影
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MovieSearch onSearch={handleSearch} />
        <div className="mt-8">
          <MovieGrid movies={filteredMovies} />
        </div>
      </div>
    </main>
  );
}