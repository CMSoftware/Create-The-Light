import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'fetch-polyfill';
import isIE from './lib/isIE';

if (!isIE()) {
  ReactDOM.render(<App />, document.getElementById('root'));
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
  
} else {
  document.getElementById('root').innerHTML = '<p style="text-align: center; line-height: 48px; ">你的浏览器太旧了！快去升级吧</p>';
}