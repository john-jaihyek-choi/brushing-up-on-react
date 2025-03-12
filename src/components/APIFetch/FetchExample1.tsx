import { useEffect, useState } from "react";
import { DiscoverMovieResponse, Movies } from "./types";

const TMDB_API_TOKEN: string = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const FetchExample1 = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${TMDB_API_TOKEN}`,
        },
      }
    );

    const movies: DiscoverMovieResponse = await response.json();

    setMovies(movies.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
};

export default FetchExample1;
