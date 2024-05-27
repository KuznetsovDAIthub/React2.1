import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./CartItem.module.css";
import del from "../../img/x.svg";
import Counter from "../../components/Counter/Counter";
import { minusItem, plusItem, removeItem } from "../../redux/slices/cartSlise";

const CartItem = (item) => {
  const dispatch = useDispatch();
  let itemId = item.product.id;

  const onClickPlus = () => {
    dispatch(plusItem(itemId));
    console.log(`плюс ${itemId}`);
  };

  const onClickMinus = () => {
    dispatch(minusItem(itemId));
    console.log(`минус ${itemId}`);
  };
  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар из корзины?")) {
      dispatch(removeItem(item.product.id));
    }
  };

  if (item.count == 0) {
    onClickRemove();
  }

  return (
    <div className={styles.item}>
      <img
        className={styles.img}
        src={`http://localhost:3333${item.product.image}`}
        alt={item.product.title}
      />
      <div className={styles.quantiti}>
        <div className={styles.name}>
          <NavLink to={"http://localhost:3000/Product/" + item.product.id}>
            <p className={styles.name}>{item.product.title}</p>
          </NavLink>
          <button onClick={onClickRemove}>
            <img className={styles.delete} src={del} alt="x" />
          </button>
        </div>
        <div className={styles.quantiti_price}>
          <Counter
            onClickPlus={onClickPlus}
            onClickMinus={onClickMinus}
            count={item.count}
          />
          <p className={styles.price}>
            $
            {item.product.discont_price !== null
              ? (item.product.discont_price * item.count).toFixed(2)
              : (item.product.price * item.count).toFixed(2)}
            <span className={styles.oldprice}>
              {item.product.discont_price == null
                ? ""
                : `$ ${(item.product.price * item.count).toFixed(2)}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
