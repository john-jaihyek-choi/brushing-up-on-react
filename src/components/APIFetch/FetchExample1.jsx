import { Link } from "react-router";
import { useEffect, useState } from "react";

const TMDB_API_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const FetchExample1 = () => {
  const [movies, setMovies] = useState([]);

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

    const movies = await response.json();

    setMovies(movies.results);
  };

  useEffect(() => {
    getMovies();
  }, [movies]);

  return (
    <>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
};

export default FetchExample1;
