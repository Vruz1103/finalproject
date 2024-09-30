// import MovieAppHeader from "./MovieAppHeader";
// import { useState } from "react";
// import styles from "../css/genres.module.css";

// export default function Genres() {
//   // const [open, setOpen] = useState(false);
//   const [movieData, setMovieData] = useState({});

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };
//   // const handleOpen = () => {
//   //   setOpen(true);
//   // };
//   return (
//     <div className={styles.genres}>
//       {/* <MovieAppHeader movieData={movieData} setMovieData={setMovieData} /> */}

//       <ul>
//         <li>Action</li>
//         <li>Comedy</li>
//         <li>Drama</li>
//         <li>Suspense</li>
//         <li>Action</li>
//         <li>Comedy</li>
//         <li>Drama</li>
//         <li>Suspense</li>
//         <li>Action</li>
//         <li>Comedy</li>
//         <li>Drama</li>
//         <li>Suspense</li>
//         <li>Action</li>
//         <li>Comedy</li>
//         <li>Drama</li>
//         <li>Suspense</li>
//       </ul>
//     </div>
//   );
// }

import styles from "../css/genres.module.css";

export default function Genres({ isOpen, onClose }) {
  const genres = [
    ["Romance", "Kal ho na ho", "Ram-Leela", "Love Aaj Kal"],
    ["Thriller", "Qu Jingjing", "Mike Sui", "Jinmai Zhao"],
    ["Comedy", "Li Guangjie", "Chuxiao Ou", "Wu Jing"],
    ["Talk-Show", "reality", "Drama Short Sci-Fi", "Drama Short"],
    ["Reality", "Melodrama", "Political", "Medical"],
    ["Action", "Game-Show", "Adult", "Ecchi"],
    ["Magic", "Demons", "Super Power", "School"],
    ["Suspense", "Supense", "Action Sport", "Supernatural"],
    ["Web Series", "Novel", "Business", "Wuxia"],
    ["Martial Arts", "Fantasy Sci-Fi", "Short Sci-Fi", "Historical"],
    ["Fiction", "Reality Show", "Drama Thriller My", "Variety"],
    ["Sports", "Nature", "Food", "Youth"],
    ["Life", "Short", "News", "Film-Noir"],
  ];

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {genres.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.genreRow}>
            {row.map((genre, colIndex) => (
              <div key={colIndex} className={styles.genreItem}>
                {genre}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
