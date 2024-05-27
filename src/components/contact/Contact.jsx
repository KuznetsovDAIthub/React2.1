import Socials from "./../../img/Socials/Frame 3318.png";
import map from "./../../img/map.png";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <p className={styles.item_title}>Phone</p>
            <a href="tel:+74993506604" className={styles.item_text}>
              +7 (499) 350-66-04
            </a>
          </div>
          <div className={styles.item}>
            <p className={styles.item_title}>Socials</p>
            <div className={styles.item_img}>
              <img src={Socials} alt="Socials" />
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.item_title}>Address</p>
            <address className={styles.item_text}>
              Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
            </address>
          </div>
          <div className={styles.item}>
            <p className={styles.item_title}>Working Hours</p>
            <p className={styles.item_text}>24 hours a day</p>
          </div>
        </div>
        <div className="map">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
