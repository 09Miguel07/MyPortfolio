//components
import { Header, Home, Footer } from "./components";

//styles
import styles from "./app.module.css";

export const App = () => {
  return (
    <section className={styles["main"]}>
      <Header />
      <Home />
      <Footer />
    </section>
  );
};
