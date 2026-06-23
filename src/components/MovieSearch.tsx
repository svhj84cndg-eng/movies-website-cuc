'use client';

import { useState, useCallback } from 'react';

interface MovieSearchProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

export function MovieSearch({ onSearch, initialQuery = '' }: MovieSearchProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className="mb-8">
      <label htmlFor="movie-search" className="sr-only">
        搜索电影
      </label>
      <div className="relative max-w-xl">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          id="movie-search"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="搜索片名、导演、类型..."
          className="w-full pl-12 pr-4 py-3 text-neutral-900 placeholder-neutral-400 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all duration-200"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="清除搜索"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}