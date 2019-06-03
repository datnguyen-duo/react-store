import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from './actions/cartActions';

class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };

  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };

  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedProducts = this.props.products.length ? (
      this.props.products.map(product => {
        return (
          <div key={product.id}>
            {product.name}
            {product.quantity}
          </div>
        );
      })
    ) : (
      <p>Nothing</p>
    );
    return (
      <>
        <Navbar />
        {addedProducts}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedProducts
  };
};

export default connect(mapStateToProps)(Cart);
