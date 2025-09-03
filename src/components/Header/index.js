import styles from "./Header.module.scss";
import ComImagem from "./ComImagem";
import SemImagem from "./SemImagem";

export default function Header({ titulo, descricao, className = "", imagem }) {
  return (
    <header className={styles.header}>
      {titulo && !imagem && <SemImagem titulo={titulo} descricao={descricao} />}
      {titulo && imagem && (
        <ComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
}
