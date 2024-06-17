/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";

const Poster = ({ movieId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-poster", movieId],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=11eec6b26256cd542c6f92ff289594c5`,
      )
        .then((res) => res.json())
        .then((data) => data.poster_path),
  });

  if (isLoading) {
    return (
      <div className="text-white">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-600 font-extralight text-lg">Something went wrong</p>;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w342/";
  const posterurl = `${imageUrl}${data}`;

  return (
    <div className="movie-poster bg-inherit">
      <img
        src={posterurl}
        alt="movie poster"
        className=" lg:h-[400px] lg:w-[320px] sm:w-[200px] sm:h-[350px] shadow-xl transform transition-transform duration-300 hover:scale-[1.08]"
      />
    </div>
  );
};

export default Poster;
