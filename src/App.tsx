import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Intro } from "./componets/Intro/Intro";
import { QuickCards } from "./componets/QuickCards/QuickCards";
import { Projects } from "./componets/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.background}>
        <Navbar />
        <Intro />
        <div className={styles.quickCardsContainer}>
          <QuickCards />
        </div>
        <div className={styles.projectsContainer}>
          <Projects />
        </div>
        
      </div>
    </div>
  );
}

export default App;
