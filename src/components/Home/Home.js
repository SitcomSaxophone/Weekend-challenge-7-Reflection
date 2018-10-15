import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>
                    Home
            </h2>
            <Router>
                <Link to={'/feelings'}>Start Leaving Feedback</Link>
            </Router>
            
            <Router>
                <Route exact path={'/feelings'} component={Feelings}/>
            </Router>
            </div>



        )
    }
}

export default Home;