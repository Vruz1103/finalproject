import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import styles from "../css/movielist.module.css";
import Featured from "./Featured";
import MovieCard from "./MovieCard";

import axios from "axios";

// const URL="https://api.tvmaze.com/search/shows";
// const API_KEY="_UnrgO0re3te9sXKWxh1TfEvuxZRoY_c";

// export default function MovieList(){
//     const [movieData,setMovieData]=useState([])
// const [showId,setShowId]=useState("");

// useEffect(()=>{
//    console.log("inside movie")
//     async function fetchMovie(){
//       const res= await fetch(`${URL}?q=${showId}`);
//       const data=await  res.json();
//       console.log(data,"movie dataa");
//     //   console.log(data.results);
//     setMovieData(data);
//     }
//     fetchMovie()
//     // function demo(){
//     //     console.log("Demo function executed");
//     // }
//     // demo()
// },[showId]);

// console.log("Movie data", movieData)

const URL = "https://api.tvmaze.com/shows?page=1";
// const API_KEY = "_UnrgO0re3te9sXKWxh1TfEvuxZRoY_c";

const api = axios.create({
  baseURL: URL,
});

api.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    // config.params['api_key'] = API_KEY;
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
export default function MovieList({ limit }) {
  const [movieList, setMovieList] = useState([]);

  // export default function Search({ movieData, setMovieData }) {
  //   const [showId, setShowId] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await api.get(URL);

        console.log(data);
        setMovieList(data?.slice(0, limit));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      <div className={styles.movieList}>
        {/* <div className={styles.movieWrap}> */}
        {/* <div className={styles.movieHeadings}> */}
        {/* <h1 className={styles.movieHeadings}>Featured</h1> */}
        {/* </div> */}
        {/* <MovieItem key={movie.id} movie={movie}/> */}

        {/* Hello */}
        {/* <MovieCard/> */}
        {/* <Featured/> */}
        {/* <div className={styles.movieGrid}> */}
        <div className={styles.movieListContainer}>
          {movieList?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
