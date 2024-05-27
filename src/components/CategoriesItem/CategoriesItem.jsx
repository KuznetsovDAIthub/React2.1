import { NavLink } from "react-router-dom";
import styles from "./CategoriesItem.modue.css";

const CategoriesItem = (props) => {
  const id = props.id;

  return (
    <NavLink to={"http://localhost:3000/ProductsCategory/" + id}>
      <div className={styles.item}>
        <img className={styles.img} src={props.image} alt={props.title} />

        <p>{props.title}</p>
      </div>
    </NavLink>
  );
};

export default CategoriesItem;
