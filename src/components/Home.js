import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { products, match } = this.props;
    return (
      <>
        {Object.keys(products).map(id => {
          return (
            <>
              <NavLink key={id} to={`/projects/${id}`}>
                {products[id].title}
              </NavLink>
            </>
          );
        })}
      </>
    );
  }
}

export default Home;
