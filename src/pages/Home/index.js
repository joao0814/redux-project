import Header from "components/Header";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header
        titulo="Classificados Tech"
        descricao="Compre e venda produtos de tecnologia"
        imagem={relogio}
        className={styles.header}
      />
    </div>
  );
}
