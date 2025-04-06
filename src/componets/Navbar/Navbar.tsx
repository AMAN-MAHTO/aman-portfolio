import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <a className={styles.title} href="/">
          Mahto
        </a>

        <ul className={styles.menuList}>
          <li>
            <a href="/about">About</a>
          </li>
        
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>

        <div>
          <ul className={styles.quickLinks}>
            <li>
              <a href="/twitter">
                <img src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6659be11894839cb247ecf64_icon-twitter.svg"></img>
              </a>
            </li>
            <li>
              <a href="/instagram">
                <img src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6659be3dd8d82b641710d4f1_icon-instagram.svg"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
