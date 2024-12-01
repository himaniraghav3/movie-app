export interface Movie {
  id: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  origin_country: string;
  tagline: string;
  genres: genre[];
}

interface genre {
  id: string;
  name: string;
}
