/*
** Created by vzt & lsj
** 2018/11/4
*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import RouteHook from 'react-route-hook';
import 'normalize.css';
import './App.scss';
import Api from './Api';

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
      baseData: null,
      sectionsData: null,
    }
  }
  componentDidMount(props) {
    this.fetchData(Api.base, 'baseData');
  }
  fetchData(url, stateName) {
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          [stateName]: data,
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header data={this.state.baseData && this.state.baseData.header}>
              <ul>
                <li className={this.state.navIndex === 0 ? "nav--active" : ""}>
                  <Link to="/">首页</Link>
                </li>
                <li onClick={() => { }}>
                  <a rel="noopener noreferrer" href="//cmsoftware.github.io/" target="_blank">空间</a>
                </li>
                <li className={this.state.navIndex === 2 ? "nav--active" : ""}>
                  <Link to="/members">成员</Link>
                </li>
                <li className={this.state.navIndex === 3 ? "nav--active" : ""}>
                  <Link to="/about">关于</Link>
                </li>
              </ul>
            </Header>
            <RouteHook path="/" exact component={Index} onEnter={() => this.setState({ navIndex: 0 })}></RouteHook>
            <RouteHook path="/members" component={Members} onEnter={() => this.setState({ navIndex: 2 })}></RouteHook>
            <RouteHook path="/about" component={About} onEnter={() => this.setState({ navIndex: 3 })}></RouteHook>
          </div>
        </Router>
        <Footer data={this.state.baseData && this.state.baseData.footer}></Footer>
      </div>
    );
  }
}

export default App;
