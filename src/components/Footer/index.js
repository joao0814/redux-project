import style from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconProps = {
  color: "white",
  size: 24,
  "aria-label": "Social media icon",
};

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <FaFacebook
          className={style.icon}
          {...iconProps}
          aria-label="Facebook"
        />
        <FaTwitter className={style.icon} {...iconProps} aria-label="Twitter" />
        <FaInstagram
          className={style.icon}
          {...iconProps}
          aria-label="Instagram"
        />
      </div>
      <span>Developed by João</span>
    </footer>
  );
}
