/*
** 首页底部栏jsx
** Coding by lsj
** 2018/11/7
*/
import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__introduction">
          <div className="footer__picture">
            <img className="footer__picture--logo" src="https://webinput.nie.netease.com/img/my/icon.png" alt="logo"></img>
            <div className="footer__picture--description">
              湖北武汉中南民族大学创明工作室
            </div>
          </div>
          <div className="footer__email">
            chuangming2018skrskr@foxmail.com
          </div>
          <div className="footer__copyright">
           Copyright © 2018 ChuangMing. All Rights Reserved
          </div>
        </div>
        <div className="footer__link">
          <div className="footer__link--title">友情链接</div>
          <div className="footer__link--row">
            <ul>
              <li><a href="//www.baidu.com">中南民大大学</a></li>
              <li><a href="//www.baidu.com">创新创业学院学院学院</a></li>
              <li><a href="//www.baidu.com">中南民大大学</a></li>
            </ul>
            <ul>
              <li><a href="//www.baidu.com">中南民大大学学院学院</a></li>
              <li><a href="//www.baidu.com">创新创业学院</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__elements">
          <img className="footer__elements--logo" src="https://webinput.nie.netease.com/img/my/icon.png" alt="logo"></img>
          <img className="footer__elements--logo" src="https://webinput.nie.netease.com/img/my/icon.png" alt="logo"></img>
        </div>
      </footer>
    );
  }
}