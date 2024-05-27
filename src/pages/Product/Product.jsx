import { useParams } from "react-router-dom";
import React from "react";

import styles from "./Product.module.css";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";

import { useDispatch } from "react-redux";
import Counter from "../../components/Counter/Counter";
import { addItem } from "../../redux/slices/cartSlise";

const Product = () => {
  let { id } = useParams();
  const dispath = useDispatch();

  //Получение данных
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getProductData = async () => {
      const response = await fetch("http://localhost:3333/products/" + id)
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          setProducts(products);
        });
    };

    getProductData();
  }, []);

  //Добавление продукта в хранилище
  let product = products[0];
  const onClickAdd = () => {
    const item = {
      product,
    };
    dispath(addItem(item));
  };

  return (
    <>
      {products.map((product) => (
        <div key={id} className="product">
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.img}>
                <img
                  src={`http://localhost:3333${product.image}`}
                  alt={product.title}
                />
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{product.title}</h3>
                <div className={styles.price_wrapper}>
                  <div className={styles.price}>
                    $
                    {product.discont_price !== null
                      ? product.discont_price
                      : product.price}
                  </div>
                  <div className={styles.price_oldprice}>
                    {product.discont_price == null ? "" : `$ ${product.price}`}
                  </div>
                  <div
                    className={
                      product.discont_price !== null
                        ? styles.price_sale
                        : styles.none
                    }
                  >
                    {`-${(
                      (1 - product.discont_price / product.price) *
                      100
                    ).toFixed(0)}%`}
                  </div>
                </div>
                <div className={styles.add}>
                  <Counter />
                  <ButtonAdd onClickAdd={onClickAdd} />
                </div>
                <input
                  type="checkbox"
                  className={styles.read_more_checker}
                  id="read-more-checker"
                />
                <div className={styles.text}>
                  <b>Description</b>
                  <p>{product.description}</p>
                </div>
                <label
                  htmlFor="read-more-checker"
                  className={styles.read_more_button}
                ></label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
