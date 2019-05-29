import React, { Component } from 'react';
import ProductNav from './ProductNav';

class Product extends Component {
  render() {
    const { match, products } = this.props;
    console.log(match);

    return (
      <>
        <ProductNav />
        <h1>{products.link}</h1>
      </>
    );
  }
}

export default Product;
