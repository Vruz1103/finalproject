import Container from "./Container";
import InnerContainer from "./InnerContainer";
import MovieAppHeader from "./MovieAppHeader";
import { useState } from "react";
import MovieList from "./MovieList";
import Footer from "./Footer";
import styles from "../css/movies.module.css";
export default function Movies() {
  const [movieData, setMovieData] = useState({});
  return (
    <div>
      <Container>
        <MovieAppHeader movieData={movieData} setMovieData={setMovieData} />
        <h1 className={styles.movieHeadings}> Watch Featured Movies</h1>
        <InnerContainer>
          <MovieList limit={30} />
        </InnerContainer>
        <Footer />
      </Container>
    </div>
  );
}
