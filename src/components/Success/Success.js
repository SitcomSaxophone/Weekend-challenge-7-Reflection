import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';

class Success extends Component {
    render() {
        return (
            <div>
                <h2>
                    Feedback successfully submitted!
                </h2>
                {/* link to leave new feedback */}
                <Router>
                    <Link to={'/feelings'}>Leave More Feedback</Link>
                </Router>

                <Router>
                    <Route exact path={'/feelings'} component={Feelings} />
                </Router>
            </div>
        )
    }
}

export default Success;