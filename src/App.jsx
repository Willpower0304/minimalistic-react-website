import styles from "./App.module.css";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
