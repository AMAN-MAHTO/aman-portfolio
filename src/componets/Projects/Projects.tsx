import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>My Selected Projects</h1>
      <p>Here are some of my projects that I have worked on.</p>
      <div className={styles.projectContainer}>
        <div className={styles.projectDetails}>
          <h1>title</h1>
          <h4>intro</h4>
          <p>description</p>
          <div className={styles.viewProjectButton}>View project</div>
        </div>
        <img
          className={styles.projectImage}
          src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f2314115139cb05ab742_icon-contact.svg"
        ></img>
      </div>
    </div>
  );
};
