import promotion from "./../../img/promotion.svg";
import ProductItem from "../../components/ProductItem/ProductItem";
import React from "react";
import CategoriesItem from "../../components/CategoriesItem/CategoriesItem";

import { NavLink } from "react-router-dom";
import styles from "./Home..module.css";

const Home = (props) => {
  return (
    <>
      {/* <!-- img --> */}
      <div className="container">
        <div className={styles.header__title}>
          <div className={styles.header__text}>
            <h1>
              Amazing Discounts <br />
              on Garden Products!
            </h1>
            <button className="btn__card btn__card-green">Check out</button>
          </div>
        </div>
      </div>
      {/* <!-- categories --> */}
      <div className="categories">
        <div className="container">
          <div className={styles.categories__title}>
            <h2>Categories </h2>
            <NavLink to={"/AllCategories"}>
              <div className="btn__navigation">All categories</div>
            </NavLink>
          </div>
          <div className={styles.categories__items}>
            {props.categories.slice(0, 4).map((category) => {
              return (
                <CategoriesItem
                  id={category.id}
                  key={category.id}
                  title={category.title}
                  image={`http://localhost:3333${category.image}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* <!-- promotion --> */}
      <div className={styles.promotion}>
        <div className="container">
          <div className={styles.promotion__wrapper}>
            <div className={styles.promotion__title}>
              <h2>5% off on the first order </h2>
            </div>
            <div className={styles.promotion__row}>
              <div className={styles.promotion__img}>
                <img src={promotion} alt="" />
              </div>
              <div className={styles.promotion__form}>
                <form action="" method="post">
                  <input
                    className={styles.form__item}
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className={styles.form__item}
                    type="text"
                    name="number"
                    placeholder="Phone number"
                    required
                  />
                  <input
                    className={styles.form__item}
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="btn__banner btn__banner-white"
                    type="submit"
                    value="Get a discount"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--sale  --> */}
      <div className={styles.sale}>
        <div className="container">
          <div className={styles.sale__title}>
            <h2>Sale</h2>
            <NavLink to={"/AllSales"}>
              <div className="btn__navigation">All sales</div>
            </NavLink>
          </div>
          <div className={styles.allproducts__items}>
            {props.products
              .filter((product) => product.discont_price != null)
              .slice(0, 4)
              .map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={`http://localhost:3333${product.image}`}
                    price={product.price}
                    discont_price={product.discont_price}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
