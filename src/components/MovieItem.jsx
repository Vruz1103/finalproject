import MovieCard from "./MovieCard"
import styles from "../css/movieitem.module.css"
export default function MovieItem({movie}){
    return(<div className={styles.movieItem}><img src={movie?.show?.image?.medium} alt=""></img>
        <h1>{movie?.show?.name}</h1>
        <MovieCard movie={movie}/>
        </div>)
}