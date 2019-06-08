import React, { Component } from 'react';
import ProductNav from './ProductNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }
  handleClick = id => {
    this.props.addToCart(id);
    this.setState({
      modalIsOpen: true
    });
  };

  handleChange = e => {
    this.setState({
      quantity: e.target.value
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  afterOpenModal = () => {
    document
      .getElementById('container')
      .setAttribute('style', 'opacity: .7; filter: blur(3px)');
  };

  afterCloseModal = () => {
    document
      .getElementById('container')
      .setAttribute('style', 'opacity: 1; filter: blur(0)');
  };

  render() {
    const { match, products } = this.props;
    return (
      <>
        <ProductNav />
        <div className="prod-container">
          <img src={products[match.params.id].img} alt="product-img" />
          <div className="info">
            <div className="cart-action">
              <h2>${products[match.params.id].price}</h2>
              <button
                onClick={() => this.handleClick(products[match.params.id].id)}
              >
                <FontAwesomeIcon icon={faPlus} color={'#6ea86e'} size="3x" />
              </button>
            </div>
            <h1>{products[match.params.id].name}</h1>
            <h3>{products[match.params.id].sci}</h3>
            <p>{products[match.params.id].description}</p>
            <ul>
              <li>
                <strong>Temp</strong>: {products[match.params.id].temp} °F
              </li>
              <li>
                <strong>Light</strong>: {products[match.params.id].light}
              </li>
              <li>
                <strong>Water</strong>: {products[match.params.id].water}
              </li>
              <li>
                <strong>Humidity</strong>: {products[match.params.id].humidity}
              </li>
            </ul>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            onAfterOpen={this.afterOpenModal}
            onAfterClose={this.afterCloseModal}
            contentLabel="modal"
            className="modal"
            overlayClassName="modal-overlay"
            shouldCloseOnOverlayClick={true}
          >
            <div className="modal-content">
              <img src={products[match.params.id].img} alt="product-img" />
              <h4>{products[match.params.id].name} has been added to cart!</h4>
              <div className="button-wrapper">
                <button>Keep Shopping</button>
                <Link to="/cart">Go To Cart</Link>
              </div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
