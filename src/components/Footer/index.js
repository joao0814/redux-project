import style from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const iconeProps = {
  color: "white",
  size: 24,
};

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div>
        <FaFacebook className={style.icon} {...iconeProps} />
        <FaTwitter className={style.icon} {...iconeProps} />
        <FaInstagram className={style.icon} {...iconeProps} />
      </div>
      <span>Desenvolvido por João</span>
    </footer>
  );
}
