import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Index from './components/body-index.jsx';
import Members from './components/body-members.jsx';
import About from './components/body-about.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="header">
              <nav>
                <ul>
                  <li><Link to="/">首页</Link></li>
                  <li><a href="//www.baidu.com">动态</a></li>
                  <li><Link to="/members">成员</Link></li>
                  <li><Link to="/about">关于</Link></li>
                </ul>
              </nav>
            </header>
            <Route path="/" component={Index}></Route>
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
