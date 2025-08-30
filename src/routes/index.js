import Carrinho from "components/Carrinho";
import DefaultPage from "components/DefaultPage";
import Navbar from "components/Navbar";
import Categoria from "pages/Categoria";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </>
  );
}
