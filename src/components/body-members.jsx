/*
** Coding by lsj
** 2018/11/7
*/
import React, { Component } from 'react';
import './body-members.scss';
import LazyLoad from 'react-lazyload';
import Loading from '../lib/loading';

// 滚动字幕组件
function Banner (props) {
  return  <h3 className="members__banner--footer">{props.bannerText}</h3>;
}

// 成员组件
class MemberItem extends Component {
  constructor(props) {
    super(props);
    this.imgSet = new Set();
  }
  componentDidMount() {
    Array.from(this.imgSet).map(img => this.initialBadge(img));
  }
  // 显示徽章内容
  initialBadge(img) {
    let imgAlt = img.parentNode.children[1];
    img.addEventListener('mouseover', () => imgAlt.classList.add('members__container--item-left-badge-imgAltShow'))
    img.addEventListener('mouseout', () => imgAlt.classList.remove('members__container--item-left-badge-imgAltShow'))
  }
  render() {
    return (
      <div className={this.props.animation ? "members__container--item members__container--animation" : "members__container--item"}>
        <div className="members__container--item-left">
          <img src={this.props.avatar} alt="avatar"/>
          <div className="members__container--item-left-badge">
              {
                this.props.badgeArr && this.props.badgeArr.map((e,i)=>{
                  return (
                    <div className="members__container--item-left-badge-img"  key={i+1}>
                      <img src={e.link} alt="badge" ref={el => this.imgSet.add(el)}/>
                      <div className="members__container--item-left-badge-imgAlt">
                        <span>{e.alt}</span>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        <div className="members__container--item-right">
          <div className="members__container--item-right-name">
            <h3>{this.props.name}</h3>
          </div>
          <div className="members__container--item-right-tag">
            <span>{this.props.tag}</span>
          </div>
          <div className="members__container--item-right-description">
            <p>{this.props.description}</p>
          </div>
          <div className="members__container--item-right-goal">
            学习方向 : <span>{this.props.goal}</span>
          </div>
          <div className="members__container--item-right-link">
            <span>{this.props.link}</span>
          </div>
        </div>
      </div>
    )
  }
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
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产演唱家"},
            {link:"https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",alt:"高产作家"},
            {link:"https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",alt:"高产演唱家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产演唱家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"},
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
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产演唱家"},
            {link:"https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",alt:"高产演唱家"},
            {link:"https://avatars0.githubusercontent.com/u/26624039?s=40&v=4",alt:"高产作家"},
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
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产演唱家"},
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"}
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
            {link:"https://static.hdslb.com/images/favicon.ico",alt:"高产作家"}
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
    const stillMembers = this.state.stillMembers
    const moveMembers = this.state.moveMembers
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
              (stillMembers && moveMembers && Array.isArray(stillMembers) && Array.isArray(moveMembers) ? 
                (
                  stillMembers.map((e,i) => {
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
                  }).concat(moveMembers.map((e,i) => {
                      return (
                        <LazyLoad 
                          key={i+1}
                          height={200}
                          offset={-200}
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
                  }))
                )
              : <Loading></Loading>)
            }
          </div>
        </div>
      </div>
    );
  }
}