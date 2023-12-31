export function parseSearchParams(search: string) {
  const params = new URLSearchParams(search);
  const query: Record<string, string> = {};

  for (const [key, value] of params.entries()) {
    query[key] = value;
  }

  return query;
}

export function constructMovieImageSrc(path: string) {
  return `https://image.tmdb.org/t/p/original/${path}`;
}
