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

    handleClick = () => {
        this.props.dispatch({
            type: 'SET_FEELINGS',
            payload: this.state.feeling,
        })
    }

    render() {
        return (
            <div>
                    <input onChange={this.handleChange} type="number" placeholder="How are you feeling today?" />
                
                    <button onClick={this.handleClick}>Next</button>
            </div>

        )
    }
}

export default connect()(Feelings);