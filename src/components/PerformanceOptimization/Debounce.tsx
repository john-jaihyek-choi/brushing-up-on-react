import { useState } from "react";
import { DiscoverMovieResponse, Movies } from "../APIFetch/types";

const Debounce = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [scheduledAPICall, setScheduledAPICall] =
    useState<NodeJS.Timeout | null>(null);
  const [debounceDelay, setDebounceDelay] = useState<number>(1500);

  const getMovies = async (query: string): Promise<void> => {
    try {
      console.log(query);
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
  };

  const debounce = (
    fn: (args: any) => Promise<void>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    clearTimeout(scheduledAPICall!);

    setScheduledAPICall(
      setTimeout(() => {
        fn(e.target.value);
      }, debounceDelay)
    );
  };

  return (
    <div className="flex-container flex-xy-center gap-10">
      <div className="flex-container basis-1/10 gap-5">
        <div className="flex-container">
          <label htmlFor="search" className="text-left">
            Search
          </label>
          <input
            type="text"
            placeholder="Search movies..."
            onChange={(e) => debounce(getMovies, e)}
          />
        </div>
        <div className="flex-container">
          <label htmlFor="debounce-delay" className="text-left">
            Debounce Delay (ms)
          </label>
          <input
            type="number"
            defaultValue={1500}
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
