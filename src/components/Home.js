import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    const { products } = this.props;
    return (
      <>
        <Navbar />
        {products.map(product => {
          return (
            <div>
              <NavLink to={`products/${product.link}`}>{product.title}</NavLink>
            </div>
          );
        })}
      </>
    );
  }
}

export default Home;
