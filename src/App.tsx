//components
import { Header, Home, MyKnowledge, Footer } from "./components";

//styles
import styles from "./app.module.css";

export const App = () => {
  return (
    <section className={styles["main"]}>
      <Header />
      <Home />
      <MyKnowledge />
      <Footer />
    </section>
  );
};
