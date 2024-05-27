import styles from "./header.module.css";
import logo from "./../../img/header/logo.svg";
import basket_emp from "./../../img/header/basket=empty.svg";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const { items } = useSelector((state) => state.cart);
  let totalCount = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  return (
    <header className="header">
      <div className="container no_mb">
        <div className={styles.top}>
          <NavLink to="/">
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>
          </NavLink>

          <div className={styles.nav}>
            <nav>
              <ul className={styles.nav__list}>
                <li>
                  <NavLink to="/">Main Page</NavLink>
                </li>
                <li>
                  <NavLink to="/AllCategories">Categories</NavLink>
                </li>
                <li>
                  <NavLink to="/AllProducts">All products</NavLink>
                </li>
                <li>
                  <NavLink to="/AllSales">All sales</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.basket}>
            <NavLink to="/ShoppingCart">
              <img src={basket_emp} alt="" />
              <p className={styles.totalCount}>{totalCount} </p>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
