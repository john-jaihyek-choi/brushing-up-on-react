import { useEffect, useState, useReducer } from "react";
import { DiscoverMovieResponse, Movies } from "./types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Pages {
  window: number[];
  current: number;
  last: number | null;
}

type PagesAction = "next" | "prev" | "select";

const pagesReducer = (pages: Pages, action: PagesAction): Pages => {
  switch (action) {
    case "next":
      if (pages.current == pages.last) return pages;

      return {
        ...pages,
        window: pages.window.map((pg) => pg + 1),
        current: pages.current + 1,
      };
    case "prev":
      if (pages.current == 1) return pages;

      return {
        ...pages,
        window: pages.window.map((pg) => pg - 1),
        current: pages.current - 1,
      };
    default:
      return pages;
  }
};

const FetchExample1 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [pages, dispatchPage] = useReducer(pagesReducer, {
    window: [1, 2, 3],
    current: 1,
    last: null,
  });

  const getMovies = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${pages.current}&sort_by=popularity.desc`,
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
      setIsError(true);
      console.error("Fetch error: ", error);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  useEffect(() => {
    getMovies();
  }, [pages]);

  if (isError) return <p>Error Fetching Results!</p>;

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="flex justify-center items-center">
        <button
          className="cursor-pointer"
          onClick={(e) => dispatchPage("prev")}
        >
          <ArrowLeft />
        </button>
        {pages.window.map((page) => (
          <button
            className={`px-3 cursor-pointer ${
              pages.current == page ? "font-extrabold underline" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className="cursor-pointer"
          onClick={(e) => dispatchPage("next")}
        >
          <ArrowRight />
        </button>
      </div>
      <div>
        {movies.map((movie) => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </div>
    </>
  );
};

export default FetchExample1;
