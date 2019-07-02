import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import Calculator from './components/Calculator';
import History from './components/History';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
        <History />
      </div>
    );
  }
}

render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));
