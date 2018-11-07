/*
** Coding by lsj
** 2018/11/7
*/
import React, { Component } from 'react';
import './body-members.scss';
import LazyLoad from 'react-lazyload';

// 滚动字幕组件
function Banner (props) {
  return  <h3 className="members__banner--footer">{props.bannerText}</h3>;
}

// 成员组件
function MemberItem (props) {
  return (
    <div className={props.animation ? "members__container--item members__container--animation" : "members__container--item"}>
      <div className="members__container--item-left">
        <img src={props.avatar} alt="avatar"/>
        <div className="members__container--item-left-badge">
            {
              props.badgeArr && props.badgeArr.map((e,i)=>{
                return (
                  <img key={i+1} src={e} alt="badge"/>
                )
              })
            }
        </div>
      </div>
      <div className="members__container--item-right">
        <div className="members__container--item-right-name">
          <h3>{props.name}</h3>
        </div>
        <div className="members__container--item-right-tag">
          <span>{props.tag}</span>
        </div>
        <div className="members__container--item-right-description">
          <p>{props.description}</p>
        </div>
        <div className="members__container--item-right-goal">
          学习方向 : <span>{props.goal}</span>
        </div>
        <div className="members__container--item-right-link">
          <span>{props.link}</span>
        </div>
      </div>
    </div>
  )
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
      bannerText:[
        "舔狗最终一无所有",
        "你吼那么大声干什么",
        "可以赢，但没必要"
      ][0],
      moveMembers:[
        {
          avatar:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=82b70e7e9b2397ddd6799f0261b9d58a/5bafa40f4bfbfbed4ceb01e672f0f736aec31ffc.jpg",
          name:"卢老爷1",
          badgeArr:[
            "https://static.hdslb.com/images/favicon.ico",
            "https://static.hdslb.com/images/favicon.ico",
            "https://static.hdslb.com/images/favicon.ico",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4"
          ],
          tag:"网站组酱油",
          description:"该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒",
          goal:"中上野",
          link:"github:ddddd 博客：hsokwqhjldhlqwhdl 博客：hsokwqhjldhlqwhdl 博客：hsokwqhjldhlqwhdl",
        },
        {
          avatar:"https://pic1.zhimg.com/v2-b9f2a045c4e7c04c5f71068c24c160d4_xl.jpg",
          name:"卢老爷2",
          badgeArr:[
            "https://static.hdslb.com/images/favicon.ico",
            "https://static.hdslb.com/images/favicon.ico",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4"
          ],
          tag:"网站组酱油",
          description:"该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒",
          goal:"中上野1d1d1d1d1f1fws",
          link:"github:ddddd",
        },
        {
          avatar:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=82b70e7e9b2397ddd6799f0261b9d58a/5bafa40f4bfbfbed4ceb01e672f0f736aec31ffc.jpg",
          name:"卢老爷3",
          badgeArr:[
            "https://static.hdslb.com/images/favicon.ico",
            "https://static.hdslb.com/images/favicon.ico",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",
            "https://avatars0.githubusercontent.com/u/26624039?s=40&v=4"
          ],
          tag:"网站组酱油",
          description:"该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒，没有什么好写的,该成员有点懒",
          goal:"中上野",
          link:"github:ddddd",
        },
        {
          avatar:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=82b70e7e9b2397ddd6799f0261b9d58a/5bafa40f4bfbfbed4ceb01e672f0f736aec31ffc.jpg",
          name:"卢老爷4",
          badgeArr:[
            "https://static.hdslb.com/images/favicon.ico"
          ],
          tag:"网站组酱油",
          description:"该成员有点懒，没有什么好写的,该成员有点懒",
          goal:"中上野",
          link:"github:ddddd",
        }
      ],
      stillMembers:[]
    }
  }
  componentDidMount() {
    let i = 1;
    this.bannerTimer = setInterval(
      () => {
        this.initialBanner(i);
        i < this.state.arrText.length-1 ? i++ : i=0;
      },
      5000
    );

    // 分隔数组是否动画弹出
    let moveMembers = this.state.moveMembers
    let stillMembers = moveMembers.splice(0,2)
    this.setState({
      moveMembers:moveMembers,
      stillMembers:stillMembers
    })
  }
  // 初始化滚动字幕
  initialBanner(i) {
    const arrText = this.state.arrText;
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
          <div className="members__container">
            { 
              this.state.stillMembers && this.state.stillMembers.map((e,i) => {
                return (
                  <MemberItem 
                    key={i+1}
                    avatar={e.avatar}
                    badgeArr={e.badgeArr}
                    name={e.name}
                    tag={e.tag}
                    description={e.description}
                    goal={e.goal}
                    link={e.link}
                  />
                )
              })
            }
            {
              this.state.moveMembers && this.state.moveMembers.map((e,i) => {
                return (
                  <LazyLoad 
                    key={i+1}
                    height={200}
                    offset={-250}
                  >
                    <MemberItem 
                      animation={true}
                      avatar={e.avatar}
                      badgeArr={e.badgeArr}
                      name={e.name}
                      tag={e.tag}
                      description={e.description}
                      goal={e.goal}
                      link={e.link}
                    />
                  </LazyLoad>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}