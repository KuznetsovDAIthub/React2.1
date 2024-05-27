import React from "react";
import CategoriesItem from "../../components/CategoriesItem/CategoriesItem";

import styles from "./AllCategories.module.css";

const AllCategories = (props) => {
  console.log(props.categories);
  return (
    <div className="allcategories">
      <div className="container">
        <div className={styles.title}>
          <h2>Categories</h2>
        </div>
        <div className={styles.items}>
          {props.categories.map((category) => {
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
  );
};

export default AllCategories;
