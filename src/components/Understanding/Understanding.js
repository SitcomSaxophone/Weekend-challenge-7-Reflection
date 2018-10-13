import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: 0,
    }

    handleChange = event => {
        this.setState({
            understanding: event.target.value,
        });
    }

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding,
        });
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <input autoFocus onChange={this.handleChange} type="number" placeholder="How well did you understand todays material?"/>

                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

export default connect()(Understanding);