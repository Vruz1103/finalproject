


import Home from "./Home"
import Featured from "./Featured"
import Genres from "./Genres"
import Movies from "./Movies"
import TvShows from "./TvShows"
import styles from "../css/navigation.module.css"

export default function Navigation(){
    return(<div className={styles.nav}>
        <a href="/Home" className={styles.navitems}>Home</a>
        
        <a href="/Featured" className={styles.navitems}>Featured</a>
     
        <a href="Genres" className={styles.navitems}>Genres</a>
        <a href="Movies" className={styles.navitems}>Movies</a>
        <a href="TvShows" className={styles.navitems}>Tv Shows</a>
     
    </div>)
}