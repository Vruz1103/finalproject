import Container from "./Container";
import InnerContainer from "./InnerContainer";
import MovieAppHeader from "./MovieAppHeader";
import { useState } from "react";
import MovieList from "./MovieList";
import Footer from "./Footer";
import styles from "../css/tvshows.module.css";
export default function TvShows() {
  const [movieData, setMovieData] = useState({});
  return (
    <div>
      <Container>
        <MovieAppHeader movieData={movieData} setMovieData={setMovieData} />
        <h1 className={styles.movieHeadings}>Watch Featured Tv Shows</h1>
        <InnerContainer>
          <MovieList limit={30} />
        </InnerContainer>
        <Footer />
      </Container>
    </div>
  );
}
