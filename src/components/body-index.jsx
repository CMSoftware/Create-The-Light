import React, { Component } from 'react';
import './body-index.scss';

import Carousel from './carousel-index.jsx';
export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <Carousel></Carousel>
      </div>
    );
  }
}