import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import products from '../components/products';

class ProductsHome extends Component {
  render() {
    return (
      <div className="section">
        <div className="bg" />
        {products.map(product => {
          return (
            <div className="slide" key={product.id}>
              <NavLink to={`products/${product.id}`}>
                <img src={product.img} alt="item" />
                {product.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductsHome;
