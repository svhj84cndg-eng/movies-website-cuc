'use client';

import Link from 'next/link';
import { Movie } from '@/lib/movies';

interface MovieDetailProps {
  movie: Movie;
}

export function MovieDetail({ movie }: MovieDetailProps) {
  const genres = movie.genre.join(' / ');
  const regions = movie.region.join(' / ');

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 transition-colors mb-8"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        返回列表
      </Link>

      <header className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="relative md:w-72 flex-shrink-0">
            <div className="aspect-[2/3] bg-neutral-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 bg-neutral-900/90 text-white text-lg font-bold px-3 py-1.5 rounded">
                {movie.rating.toFixed(1)}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-light text-neutral-900 tracking-tight mb-4">
              {movie.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-6 leading-relaxed">
              {movie.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
              <span className="font-medium text-neutral-900">{movie.year}</span>
              <span aria-hidden="true">·</span>
              <span>{movie.duration} 分钟</span>
              <span aria-hidden="true">·</span>
              <span>{regions}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {movie.genre.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-sm text-neutral-700 bg-neutral-100 rounded border border-neutral-200"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-t border-neutral-200 pt-12">
        <h2 className="text-xl font-medium text-neutral-900 mb-6">详细信息</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm text-neutral-500 mb-1">导演</dt>
            <dd className="text-neutral-900">{movie.director.name}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">导演地区</dt>
            <dd className="text-neutral-900">{movie.director.region}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">上映年份</dt>
            <dd className="text-neutral-900">{movie.year}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">片长</dt>
            <dd className="text-neutral-900">{movie.duration} 分钟</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">类型</dt>
            <dd className="text-neutral-900">{genres}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">制片地区</dt>
            <dd className="text-neutral-900">{regions}</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500 mb-1">评分</dt>
            <dd className="text-neutral-900 font-medium text-xl">{movie.rating.toFixed(1)}</dd>
          </div>
        </dl>
      </section>

      <section className="border-t border-neutral-200 pt-12 mt-12">
        <h2 className="text-xl font-medium text-neutral-900 mb-6">剧情简介</h2>
        <p className="text-neutral-700 leading-relaxed whitespace-pre-wrap">{movie.summary}</p>
      </section>
    </article>
  );
}