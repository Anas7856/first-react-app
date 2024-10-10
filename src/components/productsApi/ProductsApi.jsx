import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./products.css";

const ProductsApi = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.map((item, idx) => {
    return (
      <div className=" col-12 col-md-3 col-lg-3" key={idx}>
        <div className="product">
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="rating">
            <h6>
              Price <span>{item.price}$</span>
            </h6>
            <div className="stars">
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarHalfIcon className="star" />
            </div>
          </div>
          <button>ORDER NOW</button>
        </div>
      </div>
    );
  });
};

export default ProductsApi;
