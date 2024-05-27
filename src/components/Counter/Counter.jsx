import React from "react";

import minus from "../../img/minus.svg";
import plus from "../../img/plus.svg";
import styles from "./Counter.module.css";

const Counter = (props) => {
  return (
    <div className={styles.add_quantity}>
      <button
        onClick={props.count > 0 ? props.onClickMinus : props.onClickNone}
        className={styles.add_change}
      >
        <img src={minus} alt="-" />
      </button>
      <div className={styles.add_number}>{props.count}</div>
      <button onClick={props.onClickPlus} className={styles.add_change}>
        <img src={plus} alt="+" />
      </button>
    </div>
  );
};

export default Counter;
