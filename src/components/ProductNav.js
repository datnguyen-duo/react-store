import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltLeft,
  faCartPlus
} from '@fortawesome/free-solid-svg-icons';

export default class ProductNav extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/">
          <FontAwesomeIcon
            icon={faLongArrowAltLeft}
            color={'#6ea86e'}
            size="2x"
          />
        </NavLink>
        <NavLink to="/cart">
          <FontAwesomeIcon icon={faCartPlus} color={'#6ea86e'} size="lg" />
        </NavLink>
      </div>
    );
  }
}
