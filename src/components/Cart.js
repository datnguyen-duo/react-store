import React, { Component } from 'react';
import Navbar from './Navbar';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Navbar />
        Cart
      </>
    );
  }
}

export default Cart;
