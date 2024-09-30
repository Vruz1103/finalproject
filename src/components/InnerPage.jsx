import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieAppHeader from "./MovieAppHeader";
import styles from "../css/innerpage.module.css";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import TopMovie from "./TopMovie";
import Footer from "./Footer";
import MovieDetails from "./MovieDetails";
export default function InnerPage() {
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
    <div>
      <Container />

      <MovieAppHeader />
      <div className={styles.sectionWrapper}>
        <InnerContainer>
          <div className={styles.movieVideo}>
            <img src={movies?.image?.medium} className={styles.innerPageImg} />
            <div className={styles.movieDetails}>
              <MovieDetails />
            </div>
          </div>
          <TopMovie />
        </InnerContainer>
      </div>
      <Footer />
    </div>
  );
}
