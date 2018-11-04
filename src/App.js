/*
** Created by vzt & lsj
** 2018/11/4
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'normalize.css';
import './App.scss';

import Header from './components/header.jsx';
import Index from './components/body-index.jsx';
import Members from './components/body-members.jsx';
import About from './components/body-about.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 0,
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header>
              <ul>
                <li onClick={() => this.setState({ navIndex: 0 })} className={this.state.navIndex === 0 ? 'nav--active' : ''}>
                  <Link to="/">首页</Link>
                </li>
                <li onClick={() => {}}>
                  <a href="//www.baidu.com" target="_blank">空间</a>
                </li>
                <li onClick={() => this.setState({ navIndex: 2 })} className={this.state.navIndex === 2 ? 'nav--active' : ''}>
                  <Link to="/members">成员</Link>
                </li>
                <li onClick={() => this.setState({ navIndex: 3 })} className={this.state.navIndex === 3 ? 'nav--active' : ''}>
                  <Link to="/about">关于</Link>
                </li>
              </ul>
            </Header>
            <Route path="/" exact component={Index}></Route>
            <Route path="/members" component={Members}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
