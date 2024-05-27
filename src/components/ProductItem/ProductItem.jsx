import { NavLink } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const id = props.id;
  return (
    <NavLink to={"http://localhost:3000/Product/" + id}>
      <div className={styles.item}>
        <div className={props.discont_price !== null ? styles.sale : styles.none}>
          {`-${((1 - props.discont_price / props.price) * 100).toFixed(0)}%`}
        </div>
        <img src={props.image} alt={props.title} />
        <div className={styles.text}>
          <p>{props.title}</p>
          <p className={styles.price}>
            ${props.discont_price !== null ? props.discont_price : props.price}
            <span className={styles.oldprice}>
              {props.discont_price == null ? "" : `$ ${props.price}`}
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductItem;
