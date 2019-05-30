import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">
          <FontAwesomeIcon icon={faPagelines} color={'#6ea86e'} size="3x" />
        </NavLink>
        <NavLink to="/cart">
          <FontAwesomeIcon icon={faCartPlus} color={'#6ea86e'} size="2x" />
        </NavLink>
      </div>
    );
  }
}
