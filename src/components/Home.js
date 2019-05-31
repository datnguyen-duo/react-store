import React, { Component } from 'react';
import Navbar from './Navbar';
import ProductsHome from './ProductsHome';
import ReactFullpage from '@fullpage/react-fullpage';
import aboutBg from '../assets/about-bg.jpg';

class Home extends Component {
  handleScroll = () => {
    let scroll = document.getElementById('scroll');

    if (scroll.style.visibility === 'hidden') {
      setTimeout(() => {
        scroll.style.visibility = 'visible';
      }, 1000);
    } else {
      scroll.style.visibility = 'hidden';
    }
  };
  render() {
    return (
      <>
        <Navbar />
        <ReactFullpage
          scrollingSpeed={1000}
          onLeave={this.handleScroll}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div id="about" className="section">
                  <img src={aboutBg} alt="background" />
                  <h1>The Garden</h1>
                  <div id="scroll" />
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
