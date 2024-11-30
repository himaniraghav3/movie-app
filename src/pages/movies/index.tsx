import { TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MovieCard } from "../../components/movie-card";
import { getMovies } from "../../services/queryMovies";
import { useEffect, useState } from "react";
import { Movie } from "../../services/movie.model";

export default function MyPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    loadMovies();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <TextInput
          id="email4"
          type="text"
          rightIcon={MagnifyingGlassIcon}
          placeholder="Search for a movie"
          className="w-[40%]"
        />
      </div>
      <div className="flex gap-4 flex-wrap mt-10 justify-center">
        {movies.map((movie) => (
          <MovieCard
            name={movie.original_title}
            imgUrl={movie.poster_path}
            year={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}
