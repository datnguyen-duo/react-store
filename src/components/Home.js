import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductsHome from './ProductsHome';
import ReactFullpage from '@fullpage/react-fullpage';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ReactFullpage
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <ProductsHome />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </>
    );
  }
}

export default Home;
