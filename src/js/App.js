import React, { Component } from 'react';

import '../css/App.css';
import FearPool from './FearPool.jsx';
import FearDeck from './fear/FearDeck.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit Island Helper</h1>
        </header>

        <FearPool players={3} />
        <FearDeck />
      </div>
    );
  }
}

export default App;
