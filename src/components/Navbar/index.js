import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Search from "components/Search";

export default function Navbar({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const iconeProps = {
    color: "white",
    size: "24px",
  };

  return (
    <nav className={styles.nav}>
      <Logo
        className={styles.logo}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className={styles.links}>
        <div>
          <Link
            to={"/"}
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === "/",
            })}
          >
            Home
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icone}>
        <Link to="/carrinho">
          {location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </Link>
      </div>
      <div>{children}</div>
    </nav>
  );
}
