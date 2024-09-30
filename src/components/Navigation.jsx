import Home from "./Home";
import Featured from "./Featured";
import Genres from "./Genres";
import Movies from "./Movies";
import TvShows from "./TvShows";
import styles from "../css/navigation.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  // const [open, setOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  return (
    <>
      <Genres isOpen={isGenresOpen} onClose={() => setIsGenresOpen(false)} />

      {/* {open && <Genres />} */}
      <div className={styles.nav}>
        <Link to="/" className={styles.navitems}>
          Home
        </Link>

        <Link to="/Featured" className={styles.navitems}>
          Featured
        </Link>

        <Link
          to="#"
          className={styles.navitems}
          // onClick={() => {
          //   setOpen(!open);
          // }}
          onClick={() => setIsGenresOpen(true)}
        >
          Genres
        </Link>

        <Link to="/Movies" className={styles.navitems}>
          Movies
        </Link>
        <Link to="/TvShows" className={styles.navitems}>
          Tv Shows
        </Link>
      </div>
    </>
  );
}
