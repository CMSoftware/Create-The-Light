/*
** 首页导航栏
** Coding by vzt
** 2018/11/4
*/
import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav>
          {this.props.children}
        </nav>
      </header>
    );
  }
}