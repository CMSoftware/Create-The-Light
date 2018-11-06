/*
** 首页导航栏
** Coding by vzt
** 2018/11/4
*/
import React, { Component } from 'react';
import './header.scss';

import Throttle from 'lodash.throttle';

export default class Header extends Component {
  getScrollTop() {
    // 拿到当前滚动条高度
    let scrollTop = 0;
    if(document.documentElement && document.documentElement.scrollTop){    
      scrollTop = document.documentElement.scrollTop;    
    }else if(document.body){    
      scrollTop = document.body.scrollTop;    
    }
    return scrollTop;
  }
  initialScroll(el) {
    // 监听滚动事件
    this._header = el;
    const throttleFn = Throttle(e => {
      if(this.getScrollTop() > 0) {
        this._header.classList.add('header--active');
      } else {
        this._header.classList.remove('header--active');
      }
    }, 100);
    document.addEventListener('scroll', throttleFn);
  }
  render() {
    return (
      <header className="header" ref={el => this.initialScroll(el)}>
        <div className="logo">
          <a href="/">
            <img
              className="logo__icon"
              src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2959708265,3856768320&fm=58&bpow=705&bpoh=675"
              alt="Logo"/>
            <span className="logo__text">Creative</span>
          </a>
        </div>
        <nav className="nav">
          {this.props.children}
        </nav>
      </header>
    );
  }
}