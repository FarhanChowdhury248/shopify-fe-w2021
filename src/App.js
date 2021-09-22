import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PATHS } from "./shared/constants";
import { HomePage } from "./pages/HomePage";
import { FavouritesPage } from "./pages/FavouritesPage";
import { Navbar } from "./shared/components";
import { FavouritesProvider } from "./shared/FavouritesContext";

function App() {
  return (
    <>
      <FavouritesProvider>
        <Router>
          <Navbar />
          <Route path={PATHS.HOME_PAGE} exact component={() => <HomePage />} />
          <Route
            path={PATHS.FAVOURITES_PAGE}
            exact
            component={() => <FavouritesPage />}
          />
        </Router>
      </FavouritesProvider>
    </>
  );
}

export default App;
