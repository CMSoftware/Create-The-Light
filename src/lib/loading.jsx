/*
** 首页底部栏jsx
** Coding by lsj
** 2018/11/4
*/
import React, { Component } from 'react';
import './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-wrapper">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}