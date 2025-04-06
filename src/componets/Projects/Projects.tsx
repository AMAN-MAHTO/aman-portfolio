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

      <div className={styles.projects}>
        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <h1>Ocean Note</h1>
            <h6>Real-Time Collaboration, Advanced Note Management</h6>
            <p>
              Integrated Google Authentication, real-time collaborative editing,
              sharing, and access control for notes. Designed smooth UI
              interactions with custom animations.
            </p>
            {/* <div className={styles.viewProjectButton}>View project</div> */}
          </div>
          <img className={styles.projectImage} src="/assets/p1.png"></img>
        </div>

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <h1>TaskManager App</h1>
            <h6>Local Database, MDC Android, Progress Tracing system</h6>
            <p>
              Track progress with a horizontal date selector. Create, delete,
              and update tasks easily. Simplified ’yes/no’ habit tracking.
            </p>
            {/* <div className={styles.viewProjectButton}>View project</div> */}
          </div>
          <img className={styles.projectImage} src="/assets/p2.png"></img>
        </div>

        <div className={styles.project}>
          <div className={styles.projectDetails}>
            <h1>Marvel-Comic App</h1>
            <h6>UI Design, API Integration</h6>
            <p>
              Comprehensive collection of series, stories, characters, and
              comics with seamless navigation.
            </p>
            {/* <div className={styles.viewProjectButton}>View project</div> */}
          </div>
          <img className={styles.projectImage} src="/assets/p3.png"></img>
        </div>
      </div>
    </div>
  );
};
