/*
** 首页导航栏
** Created by vzt
** 2018/11/04
*/
import React, { Component } from 'react';
import './header.scss';
import MenuIcon from '../lib/menu-icon';

import Throttle from 'lodash.throttle';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuActive: false,
      headerData: props.data,
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      headerData: props.data,
    });
  }
  getScrollTop() {
    // 拿到当前滚动条高度
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }
  initialScroll(el) {
    // 监听滚动事件
    this._header = el;
    const throttleFn = Throttle(e => {
      if (this.getScrollTop() > 0) {
        this._header.classList.add('header--active');
      } else {
        this._header.classList.remove('header--active');
      }
    }, 100);
    document.addEventListener('scroll', throttleFn);
  }
  toggleMenu(e) {
    this.setState({
      isMenuActive: !this.state.isMenuActive,
    }, () => {
      if(this.state.isMenuActive) {
        this._navToggler.classList.remove('nav__menu--close');
        this._navToggler.classList.add('nav__menu--open');
      } else {
        this._navToggler.classList.add('nav__menu--close');
        this._navToggler.classList.remove('nav__menu--open');
      }
    });
  }
  render() {
    return (
      <header className="header" ref={el => this.initialScroll(el)}>
        <div className="logo">
          <a href="/">
            {
              this.state.headerData && this.state.headerData.logo && (
                <img
                  className="logo__icon"
                  src={this.state.headerData.logo}
                  alt="Logo" />
              )
            }
            <span className="logo__text">{this.state.headerData && this.state.headerData.title}</span>
          </a>
        </div>
        <nav className="nav">
          {this.props.children}
        </nav>
        <nav className="nav-mobile">
          <MenuIcon className="nav__toggler" isActive={this.state.isMenuActive} handleClick={e => this.toggleMenu(e)}></MenuIcon>
          <div className="nav__menu" ref={el => this._navToggler = el} onClick={e => this.toggleMenu(e)}>
            {this.props.children}
          </div>
        </nav>
      </header>
    );
  }
}