import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../services/queryMovies";
import { useEffect, useState } from "react";
import { Movie } from "../../../services/movie.model";
import { Badge } from "flowbite-react";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movie = id && (await getMovieDetails(id));
      setMovie(movie);
    };
    loadMovieDetails();
  }, [id]);

  return (
    <div className="flex w-full bg-zinc-700 h-[calc(100vh-48px)] p-20">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        className="p-10 w-1/2"
      />
      <div className="p-10 w-1/2">
        <div className="flex justify-between items-center">
          <h3 className="text-zinc-200 text-3xl">{movie?.original_title}</h3>
          <h3 className="text-red-500 text-xl">
            Rating- {movie?.vote_average}/10
          </h3>
        </div>
        <h3 className="text-zinc-400 text-xl">{movie?.tagline}</h3>
        <div className="mt-4 flex gap-2">
          <Badge size="sm" color="failure" className="w-fit">
            {movie?.release_date.split("-")[0]}
          </Badge>
          {movie?.genres.map((genre) => (
            <Badge size="sm" color="gray" className="w-fit">
              {genre.name}
            </Badge>
          ))}
        </div>

        <p className="text-base mt-8 text-zinc-300">{movie?.overview}</p>
      </div>
    </div>
  );
}
