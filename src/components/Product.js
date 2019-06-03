import React, { Component } from 'react';
import ProductNav from './ProductNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addToCart = () => {
    const count = this.state.count;
    this.setState({
      count: count + 1
    });
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
              <h2>{products[match.params.id].price}</h2>
              <button onClick={() => alert(products[match.params.id].id)}>
                <FontAwesomeIcon icon={faPlus} color={'#6ea86e'} size="3x" />
              </button>
            </div>
            <h1>{products[match.params.id].name}</h1>
            <h3>{products[match.params.id].sci}</h3>
            <p>{products[match.params.id].description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
