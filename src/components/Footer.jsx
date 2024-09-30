// import AZ from "./AZ";

// export default function Footer() {
//   return (
//     <div>
//       <AZ />
//       <div>
//         <a href="NewAdded">New Added</a>
//         <a href="NewRelease">New Releases</a>
//         <a href="MostWatched">Most Watched</a>
//       </div>
//       <div>
//         <p>
//           Disclaimer: This site does not store any files on its server. All
//           contents are provided by non-affiliated third parties.
//         </p>
//       </div>
//     </div>
//   );
// }

import styles from "../css/footer.module.css";
import AZ from "./AZ";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <AZ />
      <div className={styles.navLinks}>
        <a href="NewAdded" className={styles.navLink}>
          New Added
        </a>
        <a href="NewRelease" className={styles.navLink}>
          New Releases
        </a>
        <a href="MostWatched" className={styles.navLink}>
          Most Watched
        </a>
      </div>
      <div className={styles.disclaimer}>
        <p>
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.
        </p>
      </div>
    </footer>
  );
}
