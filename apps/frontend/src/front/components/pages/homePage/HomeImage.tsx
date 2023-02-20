import cat from "assets/images/cat.png"

import styles from "../../../styles/Animation.css"

export const HomeImage = () => {
  return (
    <img
      className={styles.slideInLeft}
      src={cat}
      alt=""
      style={{
        width: "100%",
      }}
    />
  )
}
