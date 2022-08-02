import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { navbarItems } from "./navItems";
import Contact from "./Contact";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import "./styles.css";

function App(props) {
  const theNavItems = navbarItems.map((el) => {
    return (
      <li key={el.key}>
        <Link to={el.name}>{el.label}</Link>
      </li>
    );
  });

  return (
    <>
      <h1>Final Assignment</h1>
      <nav>
        <ul>{theNavItems}</ul>
      </nav>
      <div id="app-body">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// {
//   /* <ul>
//         <li><Link to ="/">Home</Link></li>
//         <li><Link to ="/products">Products</Link></li>
//         <li><Link to ="/contact">Contact</Link></li>
//         <li><Link to ="/SingleProduct">SingleProduct</Link></li>
//       </ul> */
// }
