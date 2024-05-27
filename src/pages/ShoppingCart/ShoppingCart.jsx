import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

import styles from "./ShoppingCart.module.css";

import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = () => {
  const { items } = useSelector((state) => state.cart);

  let totalCount = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  let totalPrice = items.reduce((sum, obj) => {
    return obj.product.discont_price == null
      ? obj.product.price * obj.count + sum
      : obj.product.discont_price * obj.count + sum;
  }, 0);

  return (
    <>
      <div className="container">
        <div className={styles.title}>
          <h2>Shopping Cart</h2>
          <NavLink to={"/"}>
            <div className="btn__navigation">Back to the store</div>
          </NavLink>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.items}>
            {items.map((item) => (
              <CartItem key={item.product.id} {...item} />
            ))}
          </div>

          <div className={styles.order}>
            <div className={styles.details}>
              <h2>Order details</h2>
              <div className={styles.order_price}>
                <p>{totalCount} items</p>
                <p></p>
                <p>Total </p>
                <p className={styles.end_price}>${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            <div className={styles.form}>
              <form action="" method="post">
                <input
                  className={styles.form_item}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className={styles.form_item}
                  type="text"
                  name="number"
                  placeholder="Phone number"
                  required
                />
                <input
                  className={styles.form_item}
                  type="text"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input className={styles.btn} type="submit" value="Order" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
