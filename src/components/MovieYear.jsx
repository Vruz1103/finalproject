import styles from "../css/movieyear.module.css"

export default function MovieYear({movieyear}){

    return(<div className={styles.movieYear}>
        {movieyear}
    </div>)
}