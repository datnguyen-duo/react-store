import React, { Component } from 'react';
import ProductNav from './ProductNav';

class Product extends Component {
  render() {
    const { match, products } = this.props;
    console.log(match);

    return (
      <>
        <ProductNav />
        <h1>{products[match.params.id].name}</h1>
        <p>{products[match.params.id].description}</p>
      </>
    );
  }
}

export default Product;
