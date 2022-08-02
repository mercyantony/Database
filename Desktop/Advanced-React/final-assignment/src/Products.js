import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("got products");
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="product-container">
      <h2>Products </h2>
      <ol>
        {products.map((product) => {
          return (
            <li key={product.id} className="card">
              <img src={product.image} alt="" />
              <div className="card-description">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
              <Link to={`/products/${product.id}`}>View</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Products;
