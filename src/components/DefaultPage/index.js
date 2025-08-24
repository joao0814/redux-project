import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./DefaultPage.module.scss";

const DefaultPage = () => (
  <div className={styles.container}>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default DefaultPage;
