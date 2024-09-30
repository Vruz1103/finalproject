// export default function AZ() {
//   return (
//     <div>
//       <div>A</div>
//       <div>B</div>
//       <div>C</div>
//       <div>D</div>
//       <div>E</div>
//       <div>F</div>
//       <div>G</div>
//       <div>H</div>
//       <div>I</div>
//       <div>J</div>
//       <div>K</div>
//       <div>L</div>
//       <div>M</div>
//       <div>N</div>
//       <div>O</div>
//       <div>P</div>
//       <div>Q</div>
//       <div>R</div>
//       <div>S</div>
//       <div>T</div>
//       <div>U</div>
//       <div>V</div>
//       <div>W</div>
//       <div>X</div>
//       <div>Y</div>
//       <div>Z</div>
//     </div>
//   );
// }

import styles from "../css/az.module.css";

export default function AZ() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className={styles.azContainer}>
      <div className={styles.azTitle}>
        A-Z LIST Searching movie order by alphabet name A to Z.
      </div>
      <div className={styles.azList}>
        {letters.map((letter) => (
          <div key={letter} className={styles.azItem}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}
