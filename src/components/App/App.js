import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Router>
          <div>
            <Link to={'/'}>Understanding</Link>
            <br />
            <Link to={'/feelings'}>Feelings</Link>
            <br />
            <Link to={'/comments'}>Comments</Link>
            <br />
            <Link to={'/support'}>Support</Link>
          </div>
        </Router>

        <Router>
          <div>
            <Route exact path="/" component={Understanding} />
            <Route path="/feelings" component={Feelings} />
            <Route path="/comments" component={Comments} />
            <Route path="/support" component={Support} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
