import "./styles/main.css";

import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Product from "./pages/Product/Product";

import Home from "./pages/Home/Home";
import AllCategories from "./pages/AllCategories/AllCategories";
import AllProducts from "./pages/AllProducts/AllProducts";
import ProductsCategory from "./pages/ProductsCategory/ProductsCategory";
import NotFound from "./pages/NotFound/NotFound";
import AllSales from "./pages/AllSales/AllSales";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";


import ScrollToTop from "./utils/scrollToTop";
import Counter from "./components/Counter/Counter";

function App() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3333/categories/all")
      .then((res) => {
        return res.json();
      })
      .then((categories) => {
        setCategories(categories);
      });
  }, []);

  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const getProductData = async () => {
      const response = await fetch("http://localhost:3333/products/all")
        .then((response) => {
          return response.json();
        })
        .then((products) => {
          setProducts(products);
        });
    };

    getProductData();
  }, []);

  return (
    <div className="App">

      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home categories={categories} products={products} />}
          />
          <Route
            path="/AllCategories"
            element={<AllCategories categories={categories} />}
          />
          <Route
            path="/AllProducts/"
            element={<AllProducts products={products} />}
          />
          <Route
            path="/Product/:id"
            element={<Product products={products} />}
          />

          <Route
            path="/ProductsCategory/:id"
            element={
            <ProductsCategory categories={categories} products={products} />}/>
          
          <Route path="/AllSales" element={<AllSales products={products}/>} />
          
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
