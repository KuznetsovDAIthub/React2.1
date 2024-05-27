import React from "react";

import ProductItem from "../../components/ProductItem/ProductItem";
import SortForm from "../../components/SortForm/SortForm";

import { useParams } from "react-router-dom";

import styles from "./ProductsCategory.module.css";

const ProductsCategory = (props) => {
  let { id } = useParams();

  return (
    <>
      <div className="container">
        <div className="allproducts__title">
          <h2>
            {props.categories.slice(id - 1, id).map((category) => {
              return category.title;
            })}
          </h2>
        </div>
        <SortForm />
        <div className={styles.items}>
          {props.products
            .filter((product) => product.categoryId == id)
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
    </>
  );
};

export default ProductsCategory;
