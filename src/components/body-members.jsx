/*
** Coding by lsj
** 2018/11/5
*/
import React, { Component } from 'react';
import './body-members.scss';

function Banner (props) {
  return  <h3 id="bannerSwitch" className="members__banner--footer">{props.bannerText}</h3>;
}

export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrText:[
        "舔狗最终一无所有",
        "你吼那么大声干什么",
        "可以赢，但没必要"
      ],
      bannerText:'舔狗最终一无所有'
    }
  }
  componentDidMount() {
    let i = 0;
    this.bannerTimer = setInterval(
      () => {
        // let bannerSwitch = document.querySelector('#bannerSwitch');
        this.initialBanner(i);
        i < this.state.arrText.length-1 ? i++ : i=0;
      },
      2000
    );
  }
  initialBanner(i) {
    const arrText = this.state.arrText;
    // let bannerSwitch = document.querySelector('#bannerSwitch');
    this.setState({bannerText: arrText[i]});
  }
  render() {
    return (
      <div className="members">
        <div className="members__banner">
          <h1 className="members__banner--top">ChuangMing Members</h1>
          <h1 className="members__banner--middle">创明工作室</h1>
          <Banner bannerText={this.state.bannerText} />
        </div>
        <div className="members__section">
          111
        </div>
      </div>
    );
  }
}