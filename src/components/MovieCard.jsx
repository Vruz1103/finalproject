import MovieYear from "./MovieYear"
import styles from "../css/moviecard.module.css"
export default function Moviecard({movie}){

    const handleClick=()=>{
        console.log("Hello")
    }
    // const movietitle = "Under the Dome";
    // const movieyear = "2023"; 
    return(<div className={styles.movieCard} onClick={handleClick}>
        <img src={movie?.image?.medium} className={styles.movieCardImg}/>
        {/* <img className={styles.movieCardImg} movie={movie.}/> */}
        <div className={styles.movieInfo}>
        {/* <MovieYear movieyear={movieyear} /> */}
        <h1 className={styles.movieTitle}>{movie.name}</h1>
        </div>
        
    </div>)
}