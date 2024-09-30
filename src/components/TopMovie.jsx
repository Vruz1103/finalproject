import styles from "../css/topmovie.module.css";
import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import axios from "axios";
import MovieList from "./MovieList";

const URL = "https://api.tvmaze.com/shows?page=1";

const api = axios.create({
  baseURL: URL,
});

api.interceptors.request.use(
  (config) => {
    config.params = config.params || {};

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function TopMovie() {
  const [topMovie, setTopMovie] = useState([]);
  const [activeTab, setActiveTab] = useState("day");
  // return(<div className={styles.topmovie}>
  //     <div>Top Movie
  //         <img></img>
  //         <h3>MovieName</h3>
  //         <h3>Views</h3>
  //     </div>
  // </div>)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await api.get(URL);

        console.log(data);
        setTopMovie(data?.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, []);

  //     return(<div className={styles.featuredmovie}>

  // {topMovie?.map((movie)=>
  // <MovieItem key={movie.id} movie={movie}/>
  // )}
  // </div>)
  // }
  return (
    <div className={styles.topMovie}>
      <div className={styles.topMovieHeader}>
        <h2 className={styles.topMovieName}>TOP MOVIE</h2>
        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "day" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("day")}
          >
            Day
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "week" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("week")}
          >
            Week
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "month" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("month")}
          >
            Month
          </button>
        </div>
      </div>

      <div className={styles.moviesList}>
        {topMovie?.map((movie) => (
          <div key={movie.id} className={styles.moviesItem}>
            <img
              src={movie.image?.medium || "/placeholder.jpg"}
              alt={movie.name}
              className={styles.moviePoster}
            />
            <div className={styles.movieInfo}>
              <div className={styles.movieTitle}>{movie.name}</div>
              <div className={styles.movieViews}>
                {movie?.rating?.average || "N/A"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
