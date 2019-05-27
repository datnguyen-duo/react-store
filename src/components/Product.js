import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { match, products } = this.props;
    console.log(products);
    return (
      <>
        <h1>{products[match.params.id].title}</h1>
      </>
    );
  }
}

export default Product;
