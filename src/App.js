import "./index.css";

// import 2 pieces from the Router Library which will allow us to configure the routes within this app
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import MovieCatalogue from "./MovieCatalogue";
import MovieInfo from "./MovieInfo";

function App() {
  return (
    <div className="wrapper">
      {/* this app consists of 3 components */}
      {/* a Header */}
      <Header />

      {/* now we need to define our routing configuration (this is often done within the App component) */}

      {/* Step 1: use the Routes component to act as a parent container to all of the subsequently defined Routes AKA defined URL paths */}
      <Routes>
        {/* Step 2: define the individual Routes/URL paths which are viable within your app, as well as the components which are visible at those paths*/}

        {/* Here is where you will define which component is visible at what path */}
        <Route path="/" element={<MovieCatalogue />} />

        {/* The MovieInfo component should be shown when the route looks like:  */}
        {/* "www/homepage.com/movieIdHere" */}
        <Route path="/:movieId" element={<MovieInfo />}></Route>
      </Routes>

      {/* a Movie Catalogue */}
      {/* this component is only visible on the homepage */}

      {/* a Movie Details component(which is rendered when the user selects a movie) */}
    </div>
  );
}

export default App;
