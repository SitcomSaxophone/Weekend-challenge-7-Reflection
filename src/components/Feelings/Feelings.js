import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feelings extends Component {
    state = {
        feeling: 0,
    }

    handleChange = event => {
        this.setState({
            feeling: event.target.value,
        });
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_FEELINGS',
            payload: this.state.feeling,
        });
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div>
                    <input autoFocus onChange={this.handleChange} type="number" placeholder="How are you feeling today?" />
                
                    <button onClick={this.handleClick}>Next</button>
            </div>

        )
    }
}

export default connect()(Feelings);