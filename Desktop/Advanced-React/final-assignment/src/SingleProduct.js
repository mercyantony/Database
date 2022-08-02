import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./styles.css";

const SingleProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("got single product");
        setProduct(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);
  return (
    <div>
      <h2>Single Product -{id}</h2>

      <img src={product.image} alt="#" />

      <p>
        {product.title}-{product.price}
      </p>
      <Link to="/products">back</Link>
    </div>
  );
};
export default SingleProduct;
