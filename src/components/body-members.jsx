/*
** Coding by lsj
** 2018/11/10
*/
import React, { Component } from 'react';
import './body-members.scss';
import LazyLoad from 'react-lazyload';
import Loading from '../lib/loading';
import Api from '../Api';

// 成员item组件
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
    img.addEventListener('mouseover', () => imgAlt.classList.add('members__container--item-left-badge-imgAltShow'),true)
    img.addEventListener('mouseout', () => imgAlt.classList.remove('members__container--item-left-badge-imgAltShow'),true)
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
            关于Ta : <span>{this.props.link}</span>
          </div>
        </div>
      </div>
    )
  }
}

// 成员页面
export default class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrText: [],
      bannerText: null,
      bannerImage: '',
      moveMembers: null,
      stillMembers: null
    };
  }
  componentDidMount() {
    // 获取数据
    fetch(Api.members)
      .then(res => res.json())
      .then(data => {
        const header = data.members_header;
        // 分隔是否动画弹出的数组
        let moveMembers =  data.members_content.sort((x,y)=>x.order-y.order);
        let stillMembers = moveMembers.splice(0,5);
        this.setState({
          arrText: header.bannerText,
          bannerText: header.bannerText[0],
          bannerImage: header.image,
          moveMembers: moveMembers,
          stillMembers: stillMembers
        }, ()=>{
          let i = 1;
          this.refs.bannerText.classList.add('members__banner--show')
          this.bannerTimer = setInterval(
            () => {
              this.initialBanner(i);
              i < this.state.arrText.length-1 ? i++ : i=0;
            },
            5000
          );
        });
      });
  }
  componentWillUnmount() {
    clearInterval(this.bannerTimer);
  }
  // 初始化滚动字幕
  initialBanner(i) {
    const arrText = this.state.arrText;
    this.setState({bannerText: arrText[i]});
  }
  render() {
    const stillMembers = this.state.stillMembers
    const moveMembers = this.state.moveMembers
    const bannerImage = this.state.bannerImage
    return (
      <div className="members">
        {
          bannerImage ? (
            <div className="members__banner" style={{ backgroundImage: `url(${this.state.bannerImage})` }}>
              <h1 className="members__banner--top">ChuangMing Members</h1>
              <h1 className="members__banner--middle">创明工作室</h1>
              <h3 ref="bannerText" className="members__banner--footer">{this.state.bannerText}</h3>
            </div>
          ) : <div className="members__skeleton"><Loading></Loading></div>
        }
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
                        description={e.description || '这个人很懒，什么都没留下'}
                        goal={e.goal}
                        link={e.link || '佛系修仙，与世隔绝中...'}
                      />
                    )
                  }).concat(moveMembers.map((e,i) => {
                      return (
                        <LazyLoad 
                          key={-i}
                          height={200}
                          offset={-200}
                        >
                          <MemberItem 
                            animation={true}
                            avatar={e.avatar}
                            badgeArr={e.badgeArr}
                            name={e.name}
                            tag={e.tag}
                            description={e.description || '这个人很懒，什么都没留下'}
                            goal={e.goal}
                            link={e.link || '佛系修仙，与世隔绝中...'}
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