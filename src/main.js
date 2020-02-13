import React from 'react';
import ReactDOM from 'react-dom';

import {SubComponent} from './sub-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <SubComponent name="My Counter for Babel" />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);