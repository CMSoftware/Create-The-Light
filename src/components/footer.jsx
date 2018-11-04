/*
** 首页底部栏jsx
** Coding by lsj
** 2018/11/4
*/
import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__introduction">
          <div className="footer__picture">
            <img className="footer__picture--logo" src="https://webinput.nie.netease.com/img/my/icon.png" alt=""></img>
            <div className="footer__picture--description">
              备产劳段温在对该装部些听管价线与
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
          <ul>
            <li><a href="//www.baidu.com">Ivvna Huuubpcs Oclcjdgj Nscjyfef Tlrf Ixewowz</a></li>
            <li><a href="//www.baidu.com">Dmzs Oprmudct Jubr Gehwp Lqxatjtrnn</a></li>
            <li><a href="//www.baidu.com">Cgffbjkgw Drlsrkbube Uvppzptu Twzoml</a></li>
            <li><a href="//www.baidu.com">Jrkewost Rltc Lwx Ysibkke Elscqzz Qeneim</a></li>
            <li><a href="//www.baidu.com">Ivvna Huuubpcs Oclcjdgj Nscjyfef Tlrf Ixewowz</a></li>   
          </ul>
        </div>
      </footer>
    );
  }
}