import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Cart from './components/Cart';
import products from './components/products';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route
            exact
            path="/"
            render={routerProps => {
              return <Home {...routerProps} products={products} />;
            }}
          />
          <Route
            path={`/products/:link`}
            render={routerProps => {
              return <Product {...routerProps} products={products} />;
            }}
          />
          <Route path="/cart" component={Cart} />
        </Router>
      </div>
    );
  }
}

export default App;
