import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import products from '../components/products';

class ProductsHome extends Component {
  render() {
    return (
      <>
        {products.map(product => {
          return (
            <div className="prod-container" key={product.id}>
              <NavLink to={`products/${product.id}`}>
                <img src={product.img} alt="" />
                {product.name}
              </NavLink>
            </div>
          );
        })}
      </>
    );
  }
}

export default ProductsHome;
