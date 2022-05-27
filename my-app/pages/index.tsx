import type { NextPage } from "next";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import WhiteBoard from "../components/WhiteBoard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <Sidebar />
        <WhiteBoard />
      </div>
    </main>
  );
};

export default Home;
