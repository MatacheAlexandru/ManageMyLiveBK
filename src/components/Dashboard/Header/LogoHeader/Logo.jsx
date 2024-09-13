import PropTypes from "prop-types";
import styles from "./LogoHeader.module.css";

function Logo({ src, alt }) {
  return (
    <div className={styles.logoContainer}>
      <img alt={alt} src={src} className={styles.logo} />
    </div>
  );
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
