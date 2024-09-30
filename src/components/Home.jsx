import Search from "./Search";
import MovieList from "./MovieList";
import Navigation from "./Navigation";
import MovieAppHeader from "./MovieAppHeader";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import TopMovie from "./TopMovie";
import { useState } from "react";
import styles from "../css/home.module.css";
import Footer from "./Footer";

export default function Home() {
  const [movieData, setMovieData] = useState([]);
  return (
    <div>
      <Container>
        <MovieAppHeader movieData={movieData} setMovieData={setMovieData} />
        <div className={styles.sectionWrapper}>
          <h1 className={styles.movieHeadings}>Featured</h1>

          <InnerContainer>
            <MovieList limit={20} />

            <TopMovie />
          </InnerContainer>
        </div>
        <div>
          <div className={styles.sectionWrapper}>
            <h1 className={styles.movieHeadings}>Latest Movies</h1>

            <InnerContainer>
              <MovieList limit={20} />
            </InnerContainer>
          </div>
        </div>
        <div>
          <div className={styles.sectionWrapper}>
            <h1 className={styles.movieHeadings}>Trending Movies</h1>

            <InnerContainer>
              <MovieList limit={20} />
            </InnerContainer>
          </div>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
