import React from "react";

import styles from "./SortForm.module.css";

const SortForm = () => {
  const sortList = [
    "by default",
    "newest",
    "price: high-low",
    "price: low-high",
  ];

  return (
    <div className={styles.form__wrapper}>
      <form action="">
        <div>
          <label htmlFor="">
            Price
            <input className={styles.sort__price} type="text" />
            <input className={styles.sort__price} type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Discounted items
            <input className={styles.sort__discounted} type="checkbox" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Sorted
            <select className={styles.sort__select} name="sort" id="">
              {sortList.map((sortItem) => (
                <option key={sortItem} value={sortItem}>
                  {sortItem}
                </option>
              ))}
            </select>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SortForm;
