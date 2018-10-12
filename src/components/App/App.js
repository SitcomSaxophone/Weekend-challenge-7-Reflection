import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Support from '../Support/Support';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Comments />
        <Understanding />
        <Feelings />
        <Support />
        
      </div>
    );
  }
}

export default App;
