import styles from "./Loader.css";

interface LoaderProps {
  size?: "small" | "big";
}
// TODO: Loader in lib
export const Loader = (props: LoaderProps) => {
  const { size = "big" } = props;
  return (
    <div className={size === "small" ? styles.SmallLoader : styles.Loader} />
  );
};
