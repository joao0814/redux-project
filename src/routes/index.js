import DefaultPage from "components/DefaultPage";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
