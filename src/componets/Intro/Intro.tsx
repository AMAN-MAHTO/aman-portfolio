import styles from "./Intro.module.css";

export const Intro = () => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <div className={styles.intro}>
          <h1>
            Hello! <img src="/assets/aman.jpg"></img> I'm Aman
          </h1>
          <h1>a Android App Devloper</h1>

          <p>
            I am an Android developer skilled in Java and Kotlin, creating
            efficient and user-friendly mobile apps. Let's connect!
          </p>
        </div>
      </div>
      <div className={styles.divider}>
        <img src="/assets/grunge_divider.svg" alt="aman" />
      </div>
    </div>
  );
};
