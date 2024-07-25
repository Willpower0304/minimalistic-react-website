import styles from "./App.module.css";
import { Blog } from "./components/Blog/Blog";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Blog />
      </div>
    </>
  );
}

export default App;
