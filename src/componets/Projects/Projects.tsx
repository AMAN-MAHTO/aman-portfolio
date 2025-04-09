import { projectsData } from "../../utils";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <div className={styles.projectSection}>
      <div>
        <h1 className={styles.projectsIntro}>My Selected Projects</h1>
        <p className={styles.projectsIntroDescp}>
          Here are some of my projects that I have worked on.
        </p>
      </div>
      {projectsData.map((projects, index) => (
        <div key={index} className={styles.project}>
          <div className={styles.projectDetails}>
            <h1>{projects.title}</h1>
            <h6>{projects.subtitle}</h6>
            <p>{projects.description}</p>
            {projects.link && (
              <a className={styles.viewProjectButton} href={projects.link}>
                View project
              </a>
            )}
          </div>
          <img
            className={styles.projectImage}
            src={projects.image}
            alt={`${projects.title} image`}
          ></img>
        </div>
      ))}
    </div>
  );
};
