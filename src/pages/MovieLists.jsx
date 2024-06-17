import { useQuery } from "@tanstack/react-query";
import useStore from "../store";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Layouts/Header";
import { useState } from "react";

const MovieLists = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(44493);
  const moviePerPage = 15; //total movie per page

  const { data, isLoading, error } = useQuery({
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=11eec6b26256cd542c6f92ff289594c5&page=${page}`,
      ).then((res) => res.json()),
    queryKey: ["movies", page],
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    staleTime: 1000 * 60 * 15,
    onSuccess: (data) => {
      setTotalPages(data.total_pages);
    },
  });

  const favoriteMovies = useStore((state) => state.favoriteMovies);

  const toggleFavoriteMovie = useStore((state) => state.toggleFavoriteMovie);

  const { searchTerm } = useStore((state) => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
  }));

  const displayMovies = data?.results
    ?.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, moviePerPage);

  if (isLoading) {
    return (
      <div className="text-black">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600">Something went wrong</p>;
  }

  return (
    <>
      <Header />
      <main className="mb-20">
        <h1 className="text-3xl font-extrabold my-10">Lists of movies</h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {displayMovies?.map((movie) => (
            <div key={movie.id} to={`/movie/${movie.id}`}>
              {" "}
              <div className="bg-[#ffffffd8] rounded-lg border">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-t-lg"
                />

                <div className="flex justify-between my-2">
                  <Link
                    to={`/movie/${movie.id}`}
                    className="text-2xl mt-1 mx-5 text-[#6563d2] mb-1"
                    title={movie.title}
                  >
                    {movie.title.length > 20 ? movie.title.slice(0, 19) + "..." : movie.title}
                  </Link>
                  <button onClick={() => toggleFavoriteMovie(movie.id)}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={`heart  h-6 w-5 mt-2 mr-4 
         ${favoriteMovies.includes(movie.id) ? "text-[#060606]" : "text-[#d9d9d9]"}`}
                    />
                  </button>
                </div>

                <p className="text-sm mx-5 mb-2 text-[#6a7587]">{movie.overview.slice(0, 74)}...</p>
                <div className="flex justify-between m-5 text-xs text-gray-500">
                  <div className="flex gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 mt-[1px]" />
                    <span className="text-red-500">{movie.vote_average}</span>{" "}
                    <span>({movie.vote_count}+)</span>{" "}
                  </div>

                  <div>
                    <p>{movie.release_date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-20">
          <button
            className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className=" mx-2 my-2 text-black">
            Page {page} / {totalPages}
          </span>
          <button
            className="bg-white text-[#2A303C] px-3 py-1 mx-2 rounded-md shadow disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === totalPages}
          >
            Next page
          </button>
        </div>
      </main>
    </>
  );
};

export default MovieLists;
