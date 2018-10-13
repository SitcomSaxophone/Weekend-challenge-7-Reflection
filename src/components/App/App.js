import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
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

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      console.log(response.data);
      this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data });
    }).catch(error => {
      alert('Error making GET: ', error);
    });
  }

  componentDidMount() {
    this.getFeedback();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Router>
          <div>
            <Link to={'/'}>Home</Link>
            <br />
            <Link to={'/feelings'}>Feelings</Link>
            <br />
            <Link to={'/understanding'}>Understanding</Link>
            <br />
            <Link to={'/support'}>Support</Link>
            <br />
            <Link to={'/comments'}>Comments</Link>
          </div>
        </Router>

        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/understanding" component={Understanding}/>
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
