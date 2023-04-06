import portrait from "assets/images/HomePagePortrait.png";

import styles from "./SlideInLeft.css";

export const HomeImage = () => {
  return (
    <img
      className={styles.slideInLeft}
      src={portrait}
      alt=""
      style={{
        width: "100%",
      }}
    />
  );
};
