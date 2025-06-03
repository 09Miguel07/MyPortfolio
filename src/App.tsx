//components
import { Header, Home, About, Footer } from "./components";

//styles
import styles from "./app.module.css";

export const App = () => {
  return (
    <section className={styles["main"]}>
      <Header />
      <Home />
      <About />
      <Footer />
    </section>
  );
};
