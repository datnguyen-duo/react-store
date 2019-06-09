import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  removeProduct,
  addQuantity,
  subtractQuantity
} from './actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTrashAlt,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons';

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
          <div className="cart-product" key={product.id}>
            <div>
              <img src={product.img} alt="product-img" />
            </div>
            <div className="cart-content">
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <h4>
                Qty: {product.quantity}{' '}
                <button
                  onClick={() => {
                    this.handleAddQuantity(product.id);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button
                  onClick={() => {
                    this.handleSubtractQuantity(product.id);
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </h4>
            </div>
            <button
              className="remove-btn"
              onClick={() => {
                this.handleRemove(product.id);
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {/* {product.name}
            <h4>{product.quantity}</h4>

            <button
              onClick={() => {
                this.handleRemove(product.id);
              }}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <Link to="/cart">
              <button
                onClick={() => {
                  this.handleAddQuantity(product.id);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Link>
            <Link to="/cart">
              <button
                onClick={() => {
                  this.handleSubtractQuantity(product.id);
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </Link> */}
          </div>
        );
      })
    ) : (
      <h3 style={{ margin: '2em 0 3em' }}>No items in cart</h3>
    );
    return (
      <>
        <Navbar />
        <div className="cart-container">
          <div className="major">
            <h2>Shopping Cart</h2>
            {addedProducts}
            <Link to="/">
              <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />{' '}
              <h3 style={{ color: '#d4d4d4', margin: '0 5px' }}>
                Continue shopping
              </h3>
            </Link>
          </div>
          <div className="minor">
            <form action="#">
              <h3>Total: ${this.props.total}</h3>

              <label>
                Cardholder Name
                <input type="text" />
              </label>
              <label>
                Card Number
                <input type="text" />
              </label>
              <label>
                Exp Date
                <input type="text" />
              </label>
              <label>
                CCV
                <input type="text" />
              </label>
              <button>BUY</button>
            </form>
          </div>
        </div>
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
