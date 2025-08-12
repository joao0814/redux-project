import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";

export default function Navbar({ children }) {
  const location = useLocation();

  const iconeProps = {
    color: "white",
    size: "24px",
  };

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === "/",
            })}
          >
            Home
          </a>
        </div>
      </div>
      <div className={styles.busca}>opa</div>
      <div className={styles.icone}>
        <a href="/carrinho">
          {location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </a>
      </div>
      <div>{children}</div>
    </nav>
  );
}
