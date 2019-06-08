import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  removeProduct,
  addQuantity,
  subtractQuantity
} from './actions/cartActions';

class Cart extends Component {
  handleRemove = id => {
    this.props.removeProduct(id);
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
            <button
              onClick={() => {
                this.handleRemove(product.id);
              }}
            >
              remove
            </button>
            <Link to="/cart">
              <button
                onClick={() => {
                  this.handleAddQuantity(product.id);
                }}
              >
                add
              </button>
            </Link>
            <Link to="/cart">
              <button
                onClick={() => {
                  this.handleSubtractQuantity(product.id);
                }}
              >
                subtract
              </button>
            </Link>
            {product.name}
            <h4>{product.quantity}</h4>
          </div>
        );
      })
    ) : (
      <p>No items in cart</p>
    );
    return (
      <>
        <Navbar />
        {addedProducts}
        <h3>{this.props.total}</h3>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.addedProducts,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProduct: id => {
      dispatch(removeProduct(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
