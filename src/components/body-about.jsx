/*
** Created by vzt
** 2018/11/04
*/
import React, { Component } from 'react';
import './body-about.scss';
import Loading from '../lib/loading';
import Api from '../Api';

class ContactItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="about__section--contact-box">
        <div className="about__section--contact-box-header">{this.props.title}</div>
        <a href={this.props.link} target="_blank">
          <img src={this.props.img}></img>
        </a>
      </div>
    )
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about_header: null,
      about_text: null,
      about_contact: null
    };
  }
  componentDidMount() {
    // 获取数据
    fetch(Api.about)
      .then(res => res.json())
      .then(data => {
        this.setState({
          about_header: data.about_header,
          about_text: data.about_text,
          about_contact: data.about_contact
        })
      })
  }
  render() {
    const about_header = this.state.about_header
    const about_text = this.state.about_text
    const about_contact = this.state.about_contact
    return (
      <div className="about">
        {
          about_header ? (
            <div className="about__header"  style={{ backgroundImage: `url(${about_header})` }}></div>
          ) : <div className="about__skeleton"><Loading></Loading></div>
        }
        <div className="about__section">
          <div className="about__section--content">
            <h2 className="about__section--content-title">
              关于创明
            </h2>
            {
              about_text ? (
                <div className="about__section--content-text">
                  {about_text}
                </div>
              ) : <Loading></Loading>
            }
          </div>
          <div className="about__section--contact">
            <h2 className="about__section--contact-title">
              联系创明
            </h2>
            <div className="about__section--contact-boxs">
            {
              about_contact &&  Array.isArray(about_contact) ? (
                about_contact.map((e,i) => {
                  return (
                    <ContactItem
                      key={i+1}
                      title={e.title}
                      link={e.link}
                      img={e.img}
                    />
                  )
                })
              ) : <Loading></Loading>
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}