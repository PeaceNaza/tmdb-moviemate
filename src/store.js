import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  devtools(
    //devtools is for debugging
    persist(
      //to persist data to local storage
      (set) => ({
        //set function to update the store
        favoriteMovies: [], //movies that are favorited

        toggleFavoriteMovie: (movieId) =>
          set((state) => ({
            favoriteMovies: state.favoriteMovies.includes(movieId)
              ? state.favoriteMovies.filter((id) => id !== movieId)
              : [...state.favoriteMovies, movieId],
          })),

        searchTerm: "", //search term for searching movies in the search bar
        setSearchTerm: (term) =>
          set({
            searchTerm: term,
          }),
      }),
      {
        name: "favorite-movies", //name of the store
      },
    ),
  ),
);

export default useStore;
