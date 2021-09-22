import React from "react";

export const FavouritesContext = React.createContext({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = React.useState([]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites: favourites,
        addFavourite: (newFav) =>
          favourites.some((fav) => fav.id === newFav.id) ||
          setFavourites([...favourites, newFav]),
        removeFavourite: (removingFav) =>
          setFavourites(favourites.filter((fav) => fav.id !== removingFav.id)),
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
