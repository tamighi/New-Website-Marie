import portrait from "assets/images/cat.png";

import styles from "./SlideInLeft.css";

const HomeImage = () => {
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

export default HomeImage;
