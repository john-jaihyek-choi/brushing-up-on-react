import { useState, useCallback } from "react";
import { DiscoverMovieResponse, Movies } from "../APIFetch/types";
import useDebounce from "./useDebounceV1";

const Debounce = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [debounceDelay, setDebounceDelay] = useState<number>(1500);

  const getMovies = useCallback(async (query: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        }
      );

      const movies: DiscoverMovieResponse = await response.json();

      setMovies(movies.results);
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }, []);

  const debounceSearch = useDebounce(getMovies, debounceDelay);

  return (
    <div className="flex-container flex-xy-center gap-10">
      <div className="flex-container basis-1/10 gap-5">
        <div className="flex-container">
          <label htmlFor="search" className="text-left">
            Search
          </label>
          <input
            id="search"
            type="text"
            placeholder=" Search movies..."
            className="rounded-lg"
            onChange={(e) =>
              e.target.value ? debounceSearch(e.target.value) : setMovies([])
            }
          />
        </div>
        <div className="flex-container">
          <label htmlFor="debounce-delay" className="text-left">
            Debounce Delay (ms)
          </label>
          <input
            id="debounce-delay"
            type="number"
            defaultValue={1500}
            min={0}
            onChange={(e) => setDebounceDelay(Number(e.target.value))}
          />
        </div>
      </div>
      <ul className="basis-9/10">
        {movies.length ? (
          movies.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })
        ) : (
          <li>No Movies Found</li>
        )}
      </ul>
    </div>
  );
};

export default Debounce;
