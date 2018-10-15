import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

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
                    <Input autoFocus onChange={this.handleChange} type="number" placeholder="How are you feeling today?" />
                
                    <Button onClick={this.handleClick}>Next</Button>
            </div>

        )
    }
}

export default connect()(Feelings);