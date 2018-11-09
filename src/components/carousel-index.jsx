/*
** 首页图片轮播组件
** Created by vzt
** 2018/11/04
*/

import React, { Component } from 'react';
import './carousel-index.scss';
import isMobile from '../lib/isMobile';
import fetchData from '../lib/fetchData';
import Loading from '../lib/loading';
import Api from '../Api';

import '../../node_modules/swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swiper: null,
      data: null, // 轮播数据
    }
  }
  componentDidMount(props) {
    // 获取轮播数据
    fetchData.call(this, Api.carousel, 'data');
    // 监听react DOM触发更新，则执行swiper初始化
    this._watcher = setInterval(() => {
      if(this._swiperEl && this._swiperEl.childElementCount > 0) {
        this.setSwiper();
        clearInterval(this._watcher);
      }
    }, 200);
  }
  componentWillUnmount() {
    clearInterval(this._watcher);
  }
  // 初始化swiper
  setSwiper() {
    const newSwiper = new Swiper('.carousel-wrapper', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      delay: 5000,
      waitForTransition: true,
      allowTouchMove: isMobile(), // 是否允许触摸滑动
      
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
    this.setState({
      swiper: newSwiper,
    });
  }
  render() {
    return (
      <div className="carousel-wrapper">
        <div className="swiper-wrapper" ref={el => this._swiperEl = el}>
          {this.state.data && Array.isArray(this.state.data) ? this.state.data.map((item, index) => {
            return (
              <div key={index} className="swiper-slide">
                <a href={item.url}><div style={{ backgroundImage: `url(${item.image})` }}></div></a>
              </div>
            );
          }) : <Loading></Loading>}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}