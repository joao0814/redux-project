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
      <section className={styles.categorias}>
        <header className={styles.categoriasTitle}>
          <h1>Categorias</h1>
        </header>
        <div className={styles.categoriasContainer}>
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              type="button"
              className={styles.categoriaCard}
              onClick={() => navigate(`/categoria/${categoria.id}`)}
            >
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h2>{categoria.nome}</h2>
              <p>{categoria.descricao}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
