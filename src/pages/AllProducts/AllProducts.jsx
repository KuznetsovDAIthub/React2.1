import ProductItem from "../../components/ProductItem/ProductItem";
import SortForm from "../../components/SortForm/SortForm";

import styles from "./AllProducts.module.css";

const AllProducts = (props) => {
  return (
    <div className="allproducts">
      <div className="container">
        <div className={styles.title}>
          <h2>All products</h2>
        </div>
        <SortForm />
        <div className={styles.items}>
          {props.products.map((product) => {
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
  );
};

export default AllProducts;
