import Moviecard from "./MovieCard";
import MovieAppHeader from "./MovieAppHeader";
import { useState } from "react";
import Container from "./Container";
import InnerContainer from "./InnerContainer";
import MovieList from "./MovieList";
import styles from "../css/featured.module.css";

const movies = [];

export default function Featured() {
  const [movieData, setMovieData] = useState({});
  return (
    <div>
      {/* <MovieAppHeader movieData={movieData} setMovieData={setMovieData} /> */}
      <Container>
        <MovieAppHeader movieData={movieData} setMovieData={setMovieData} />
        {/* <div className={styles.sectionWrapper}> */}
        <h1 className={styles.movieHeadings}>Featured Movies & TV Shows</h1>

        <InnerContainer>
          <MovieList limit={25} />

          {/* <TopMovie /> */}
        </InnerContainer>
        {/* </div> */}
        {/* <div>
          <h1 className={styles.movieHeadings}>Latest Movies</h1>

          <InnerContainer>
            <MovieList />
          </InnerContainer>
        </div> */}
      </Container>
      {/* Featured */}
      {/* <h1 >{titlename}</h1> */}
      {/* <Moviecard /> */}
    </div>
  );
}
