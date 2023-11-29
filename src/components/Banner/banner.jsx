import styles from "./banner.module.css";

export const Banner = ({ image }) => {
  return (
    <div className={styles.banner}>
      <img src={image} />
    </div>
  );
};
