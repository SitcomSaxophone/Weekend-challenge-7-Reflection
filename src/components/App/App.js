import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/understanding" component={Understanding} />
            <Route path="/feelings" component={Feelings} />
            <Route path="/comments" component={Comments} />
            <Route path="/support" component={Support} />
            <Route path="/success" component={Success} />
            <Route path="/admin" component={Admin} />
          </div>
        </Router>

      </div>
    );
  }
}

export default connect()(App);
