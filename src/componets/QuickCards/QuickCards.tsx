import styles from "./QuickCards.module.css";

export const QuickCards = () => {
  return (
    <div className={styles.quickCards}>
      <div className={styles.card}>
        <img
          className={styles.icon}
          src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f2314115139cb05ab742_icon-contact.svg"
        ></img>
        <h3>Quick Card</h3>
        <p>Quick Card 6659affa71a3c7c8796f55fd</p>
        <div className={styles.backicon}>
          <img
            src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f34a7c4001ead54601b4_icon-arrow.svg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.icon}
          src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f2314115139cb05ab742_icon-contact.svg"
        ></img>
        <h3>Quick Card</h3>
        <p>Quick Card 6659affa71a3c7c8796f55fd</p>
        <div className={styles.backicon}>
          <img
            src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f34a7c4001ead54601b4_icon-arrow.svg"
            alt=""
          />
        </div>
      </div>
      <div className={styles.card}>
        <img
          className={styles.icon}
          src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f2314115139cb05ab742_icon-contact.svg"
        ></img>
        <h3>Quick Card</h3>
        <p>Quick Card 6659affa71a3c7c8796f55fd</p>
        <div className={styles.backicon}>
          <img
            src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f34a7c4001ead54601b4_icon-arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
