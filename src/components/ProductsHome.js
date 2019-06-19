import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';

class ProductsHome extends Component {
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
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    };

    const itemList = this.props.products.map(product => {
      return (
        <div style={style}>
          <div className="bg" />
          <div className="slide" key={product.id}>
            <NavLink to={`products/${product.id}`}>
              <img src={product.img} alt="product-img" />
            </NavLink>
            <div className="content">
              <h1>{product.name}</h1>
              <button onClick={() => this.handleClick(product.id)}>
                <h3>
                  Quick Add <FontAwesomeIcon icon={faPlus} />
                </h3>
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="section">
        {itemList}
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
            <h4>Added to cart</h4>
            <div className="button-wrapper">
              <button onClick={this.closeModal}>KEEP SHOPPING</button>
              <Link to="/cart">GO TO CART</Link>
            </div>
          </div>
        </Modal>
      </div>
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
)(ProductsHome);
