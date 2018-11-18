/*
** 首页底部栏jsx
** Coding by lsj
** 2018/11/10
*/
import React, { Component } from 'react';
import './footer.scss';
import Api from '../Api';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footer_image: null,
      footer_links: null,
      footer_email: null
    };
  }
  componentDidMount() {
    // 获取数据
    fetch(Api.base)
      .then(res => res.json())
      .then(data => {
        this.setState({
          footer_image: data.footer.image,
          footer_email: data.footer.email,
          footer_links: data.footer.links
        })
      })
  }
  render() {
    const footer_links = this.state.footer_links
    const footer_image = this.state.footer_image
    const footer_email = this.state.footer_email
    return (
      <footer className="footer">
        <div className="footer__introduction">
          <img className="footer__introduction--logo" src={footer_image || 'https://webinput.nie.netease.com/img/my/icon.png'} alt="logo"></img>
          <div className="footer__introduction--description">
            湖北武汉中南民族大学创明工作室
          </div>
        </div>
        <div className="footer__link">
          <div className="footer__link--title">友情链接</div>
          <div className="footer__link--row">
            {
              footer_links && Array.isArray(footer_links) && footer_links.map((item, i) => {
                return (
                  <a key={i + 1} href={item.url} onClick={e => { e.preventDefault(); window.open(e.url) }}>{item.title}</a>
                )
              })
            }
          </div>
        </div>
        <div className="footer__email">{footer_email || 'cm_soft@163.com'}</div>
        <div className="footer__copyright">
          Copyright © 2018 ChuangMing. All Rights Reserved
        </div>
      </footer>
    );
  }
}