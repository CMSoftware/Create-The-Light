/*
** Created by vzt
** 2018/11/07
*/

import React, { Component } from 'react';
import './menu-icon.scss';

export default class MenuIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
      handleClick: props.handleClick,
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      isActive: props.isActive,
    }, this.handleTogglerClick);
  }
  handleTogglerClick() {
    if (this._menuEl) {
      this._menuEl.classList.toggle('is-active');
    }
  }
  render() {
    return (
      <div className="hamburger" id="hamburger-2" ref={el => this._menuEl = el} onClick={e => this.state.handleClick(e)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    )
  }
}