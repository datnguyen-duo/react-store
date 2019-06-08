import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class ProductsHome extends Component {
  handleClick = id => {
    alert('Added to cart');
    this.props.addToCart(id);
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
    return <div className="section">{itemList}</div>;
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

// class ProductsHome extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="section">
//         {products.map(product => {
//           return (
//             <div className="home-prod" key={product.id}>
//               <div className="bg">
//                 <button>
//                   <FontAwesomeIcon icon={faPlus} color={'#6ea86e'} size="4x" />
//                 </button>
//               </div>
//               <div className="slide">
//                 <NavLink to={`products/${product.id}`}>
//                   <img src={product.img} alt="item" />
//                 </NavLink>
//                 <div className="content">
//                   <h1>{product.name}</h1>
//                   <h4>{product.price}</h4>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
