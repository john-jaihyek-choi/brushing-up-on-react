import { useEffect, useState, useReducer } from "react";
import { DiscoverMovieResponse, Movies } from "./types";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PagesState {
  window: number[];
  current: number;
  end: number;
}

interface PagesUpdatePayload {
  end?: number;
  page?: number;
}

type PagesAction =
  | { type: "next" }
  | { type: "prev" }
  | { type: "select"; payload: PagesUpdatePayload }
  | { type: "update"; payload: PagesUpdatePayload };

const PAGE_WINDOW_SIZE = 5;
const PAGE_START = 1;
const MAX_PAGE = 500;

const DEFAULT_PAGES_STATE: PagesState = {
  window: Array.from(
    { length: PAGE_WINDOW_SIZE },
    (_, i) =>
      (PAGE_START > MAX_PAGE - PAGE_WINDOW_SIZE
        ? MAX_PAGE - PAGE_WINDOW_SIZE + 1
        : PAGE_START) + i
  ),
  current: PAGE_START,
  end: MAX_PAGE,
};

const FetchExample1 = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movies[]>([]);
  const [pages, dispatchPages] = useReducer(pagesReducer, DEFAULT_PAGES_STATE);

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

  return (
    <>
      <div className="flex justify-center items-center">
        <button
          className="cursor-pointer "
          onClick={() => dispatchPages({ type: "prev" })}
          disabled={
            pages.current <= 1 &&
            pages.window[PAGE_WINDOW_SIZE - 1] <=
              pages.window[PAGE_WINDOW_SIZE - 1]
          }
        >
          <ChevronLeft />
        </button>
        {pages.window.map((page) => (
          <button
            key={`page-${page}`}
            className={`px-3 cursor-pointer  ${
              pages.current == page ? "font-extrabold underline" : ""
            }`}
            onClick={(e) =>
              dispatchPages({
                type: "select",
                payload: { page: Number(e.currentTarget.textContent) },
              })
            }
          >
            {page}
          </button>
        ))}
        <button
          className="cursor-pointer "
          onClick={() => dispatchPages({ type: "next" })}
          disabled={
            pages.current >= MAX_PAGE &&
            pages.window[0] <= MAX_PAGE - (PAGE_WINDOW_SIZE - 2)
          }
        >
          <ChevronRight />
        </button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <p key={movie.id}>{movie.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

const pagesReducer = (pages: PagesState, action: PagesAction): PagesState => {
  switch (action.type) {
    case "next":
      return {
        ...pages,
        window: pages.window.includes(pages.current + 1)
          ? pages.window
          : pages.window.map((pg) => pg + 1),
        current: pages.current + 1,
      };
    case "prev":
      return {
        ...pages,
        window: pages.window.includes(pages.current - 1)
          ? pages.window
          : pages.window.map((pg) => pg - 1),
        current: pages.current - 1,
      };
    case "select":
      return {
        ...pages,
        current: action.payload.page!,
      };
    default:
      return pages;
  }
};

export default FetchExample1;
