//1. import the axios library from
import axios from "axios";
// 2.import the useSate AND useEffect hook
import { useState, useEffect } from "react";

// in order to recreate the behavior of an anchor with the added benefit/logic of React Router, we can use the link component
import { Link } from "react-router-dom";

function MovieCatalog() {
  // 3. initialize state to keep track of the movie data which will be returned from the API
  const [movies, setMovies] = useState([]);

  // 4 initialize a useEffect to run the side effect of fetching data from the movie api(this side effect is running a single time on page load)

  useEffect(() => {
    console.log(`side effect is running`);
    // 5.make an asynchronous request to the TMDB API using axios
    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "80b3efd6913b7c0573391241f786ea80",
        include_adult: false,
      },
    }).then(function (showMeTheMovies) {
      console.log(showMeTheMovies);
      // 6 save the returned data within state
      setMovies(showMeTheMovies.data.results);
    });
  }, []);
  console.log("catalogue has rendered");

  return (
    <section>
      <h2>Here is your catalogue:</h2>
      <ul className="catalogue">
        {/* // 7 map through state and return a movie for each movie present in the returned API data */}
        {movies.map(function (movie) {
          return (
            // \we want to make the poster clickable and navigate to a unique URL to represent each specific movie
            <Link to={`/${movie.id}`} key={movie.id}>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`a poster for the movie ${movie.title}`}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default MovieCatalog;
