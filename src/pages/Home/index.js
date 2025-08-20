import Header from "components/Header";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();

  const categorias = useSelector((state) => state.categorias);

  return (
    <div className={styles.container}>
      <Header
        titulo="Classificados Tech"
        descricao="Compre e venda produtos de tecnologia"
        imagem={relogio}
        className={styles.header}
      />
      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
        <div className={styles["categorias-container"]}>
          {categorias.map((categoria, index) => (
            <div
              key={index}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h2>{categoria.nome}</h2>
              <p>{categoria.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
