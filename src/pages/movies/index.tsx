import { Button, Spinner, TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { MovieCard } from "../../components/movie-card";
import { getMovies, searchMovies } from "../../services/queryMovies";
import { useEffect, useState } from "react";
import { Movie } from "../../services/movie.model";

export default function MyPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    if (query.trim() === "") loadMovies();
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const filteredMovies = await searchMovies(query);
    setMovies(filteredMovies);
    setLoading(false);
  };

  return (
    <div>
      <div className="flex gap-4 justify-center mt-10">
        <TextInput
          id="email4"
          type="text"
          rightIcon={MagnifyingGlassIcon}
          placeholder="Search for a movie"
          className="w-[40%]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="flex gap-4 flex-wrap mt-10 justify-center">
        {loading ? (
          <Spinner />
        ) : (
          movies.map((movie) => (
            <MovieCard
              name={movie.original_title}
              imgUrl={movie.poster_path}
              year={movie.release_date}
            />
          ))
        )}
      </div>
    </div>
  );
}
