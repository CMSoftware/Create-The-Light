/*
** Created by vzy
** 2018/11/05
*/
import React, { Component } from 'react';
import './body-index.scss';

import Carousel from './carousel-index.jsx';
import Loading from '../lib/loading';
import Api from '../Api';

class Section extends Component {
  render() {
    const data = this.props.data;
    const i = this.props.index;
    return (
      <section className={"sections__wrapper " + this.props.classes.join(' ')}>
        <h2>
          <span className="sections__title">{this.props.title}</span>
          <span className="sections__description">{this.props.description}</span>
        </h2>
        <div className="sections__content">
          {i !== 2 ? 
            (data && data && Array.isArray(data[i].items) ? data[i].items.map((item, index) => {
              return (
                <div key={'item' + index} className="sections__item" style={{ backgroundColor: this.props.itemsColor[index] }}>
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
              <a href={data && data && data[i].url ? data[i].url : '#'}><p className="sections__blog-title">
                <span>推荐博文</span>
                <span>···</span>
              </p></a>
              <div className="sections__blog-rows">
                {data && data && Array.isArray(data[i].items) ? data[i].items[0].articles.slice(0, 6).map((article, index) => {
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
        {data && Array.isArray(data) && data[i].url && (
          <div className="sections__more">
            <a href={data[i].url}><button className="sections__more-button">更多 ></button></a>
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
        {
          index: 0,
          classes: ['sections__stacks'],
          title: '主要方向',
          description: '描述描述描述描述描述描述描述描述',
          itemsColor: ['#EE4E1C', '#7FBB04', '#44A4F1', '#F5B901']
        },
        {
          index: 1,
          classes: ['sections__projects'],
          title: '作品',
          description: '描述描述描述描述描述描述描述描述',
        },
        {
          index: 2,
          classes: ['sections__articles'],
          title: '博客',
          description: '描述描述描述描述描述描述描述描述',
        },
        {
          index: 3,
          classes: ['sections__members'],
          title: '成员',
          description: '描述描述描述描述描述描述描述描述',
        },
      ],
    }
  }
  componentDidMount() {
    fetch(Api.sections)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sectionsData: data,
        });
      });
  }
  render() {
    return (
      <div className="body">
        {/* 轮播图 */}
        <Carousel></Carousel>
        {/* 各个section */}
        <div className="sections">
          {this.state.sectionsProps.map((s, i) => {
            return (
              <Section
                classes={s.classes}
                key={'section' + s.index}
                data={this.state.sectionsData}
                index={s.index}
                title={s.title}
                description={s.description}
                itemsColor={s.itemsColor || []}
              ></Section>
            );
          })}
        </div>
      </div>
    );
  }
}