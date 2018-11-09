/*
** Created by vzy
** 2018/11/05
*/
import React, { Component } from 'react';
import './body-index.scss';

import Carousel from './carousel-index';
import Loading from '../lib/loading';
import Api from '../Api';
import fetchData from '../lib/fetchData';

class Section extends Component {
  render() {
    const data = this.props.data;
    const i = this.props.index;
    return (
      <section className={"sections__wrapper " + this.props.classes.join(' ')}>
        <h2>
          <span className="sections__title">{data.title}</span>
          <span className="sections__description">{data.description}</span>
        </h2>
        <div className="sections__content">
          {i !== 2 ?
            (data && Array.isArray(data.items) ? data.items.map((item, index) => {
              return (
                <div key={'item' + index} className="sections__item" style={{ backgroundColor: data.items_color && data.items_color[index] }}>
                  <div className="sections__item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className="sections__item-title">
                    <span>{item.title}</span>
                  </div>
                  <div className="sections__item-description">
                    <span>{item.description}</span>
                  </div>
                </div>
              );
            }) : <Loading></Loading>)
            : // 第三部分（博客）比较特殊
            (<div className="sections__item">
              <a href={data && data.url ? data.url : '#'}><p className="sections__blog-title">
                <span>{data.title}</span>
                <span>···</span>
              </p></a>
              <div className="sections__blog-rows">
                {data && Array.isArray(data.items) && data.items[0] && Array.isArray(data.items[0].articles) ? data.items[0].articles.slice(0, 6).map((article, index) => {
                  return (
                    <div key={'article' + index} className="sections__blog-row">
                      <a href={article.url}><span className="sections__blog-article">{article.title}</span></a>
                      <span className="sections__blog-author">{article.author}</span>
                    </div>
                  )
                }) : <Loading></Loading>}
              </div>
            </div>)
          }
        </div>
        {data && data.url && (
          <div className="sections__more">
            <a href={data.url}><button className="sections__more-button">更多 ></button></a>
          </div>
        )}

      </section>
    );
  }
}

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsData: null,
      sectionsProps: [
        { classes: ['sections__stacks'] },
        { classes: ['sections__projects'] },
        { classes: ['sections__articles'] },
        { classes: ['sections__members'] },
      ],
    }
  }
  componentDidMount() {
    fetchData.call(this, Api.sections, 'sectionsData');
  }
  render() {
    return (
      <div className="body">
        {/* 轮播图 */}
        <Carousel></Carousel>
        {/* 各个section */}
        <div className="sections">
          {
            this.state.sectionsData && Array.isArray(this.state.sectionsData) ? this.state.sectionsData.map((data, i) => {
              return (
                <Section
                  classes={this.state.sectionsProps[i].classes}
                  key={`section-${i}`}
                  data={data}
                  index={i}
                ></Section>
              );
            }) : <Loading></Loading>
          }
        </div>
      </div>
    );
  }
}