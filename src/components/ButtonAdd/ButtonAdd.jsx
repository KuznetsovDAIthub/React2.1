import styles from "./ButtonAdd.module.css";

const ButtonAdd = (props) => {
  return (
    <button onClick={props.onClickAdd} className={styles.btn}>
      Add to card
    </button>
  );
};

export default ButtonAdd;
