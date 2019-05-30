import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductsHome from './ProductsHome';
import ReactFullpage from '@fullpage/react-fullpage';
import aboutBg from '../assets/about-bg.jpg';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ReactFullpage
          scrollingSpeed={1000}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div id="about" className="section">
                  <img src={aboutBg} alt="background" />
                  <h1>The Garden</h1>
                  <div className="scroll" />
                </div>
                <ProductsHome />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </>
    );
  }
}

export default Home;
