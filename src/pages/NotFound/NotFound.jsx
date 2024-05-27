import React from "react";

import styles from "./NotFound.module.css";
import img404 from "../../img/404.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.notFound__wrapper}>
        <div className="">
          <img src={img404} alt="" />
        </div>
        <div>
          <h1>Page Not Found</h1>
          <p>
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <NavLink to="/">
            <button>Go Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
