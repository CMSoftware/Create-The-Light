/*
** Created by vzt
** 2018/11/07
*/
import React, { Component } from 'react';
import './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}