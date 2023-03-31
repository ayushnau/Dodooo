import React from 'react';
import product1 from "../static/product1.jpg";
import product2 from "../static/product2.jpg";
import product3 from "../static/product3.jpg";
import product4 from "../static/product4.jpg";
import product5 from "../static/product5.jpg";
import "./ProductsGrid.css";

const ProductsGrid = () => {
  return (
    <div className="ProductGridContainer">
      <div className="ProductGridheading">Products</div>
      <div className="productsGrid">
        <div className="productImageContainer product1">
          <div className="imagecontainer">
            <img src={product1} alt="" />
          </div>
          <div className="discount">
            <div className="productsname">MakeMania</div>
            <div className="productdiscount">100%Off</div>
          </div>
        </div>
        <div className="productImageContainer product2">
          <div className="imagecontainer">
            <img src={product2} alt="" />
          </div>
          <div className="discount">
            <div className="productsname">MakeMania</div>
            <div className="productdiscount">100%Off</div>
          </div>
        </div>
        <div className="productImageContainer product3">
          <div className="imagecontainer">
            <img src={product3} alt="" />
          </div>
          <div className="discount">
            <div className="productsname">MakeMania</div>
            <div className="productdiscount">100%Off</div>
          </div>
        </div>
        <div className="productImageContainer product4">
          <div className="imagecontainer">
            <img src={product4} alt="" />
          </div>
          <div className="discount">
            <div className="productsname">MakeMania</div>
            <div className="productdiscount">100%Off</div>
          </div>
        </div>
        <div className="productImageContainer product5">
          <div className="imagecontainer">
            <img src={product5} alt="" />
          </div>
          <div className="discount">
            <div className="productsname">MakeMania</div>
            <div className="productdiscount">100%Off</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
