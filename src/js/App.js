import React, { Component } from 'react';

import '../css/App.css';
import FearContainer from './fear/FearContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spirit Island Helper</h1>
        </header>

        <FearContainer players={1} fearSetup={[3, 3, 3]}/>
      </div>
    );
  }
}

export default App;