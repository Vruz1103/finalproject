import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../css/moviedetails.module.css";

export default function MovieDetails() {
  const { name } = useParams();
  const [movies, setMovies] = useState(null);

  const URL = `https://api.tvmaze.com/shows/${name}`;
  console.log(URL);

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

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await api.get(URL);

        // console.log(data);
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div className={styles.movieDetails}>
      <img src={movies?.image?.medium} className={styles.movieDetailsImg} />
      <div>
        <h1>{movies?.name}</h1>
        <p>{movies?.summary}</p>
        <h3>Type:{movies?.type}</h3>
        <h3>Date Aired:{movies?.premiered}</h3>
        <h3>Status:{movies?.status}</h3>
        <div>Genre:{movies?.genres.join(",")}</div>
      </div>
    </div>
  );
}
