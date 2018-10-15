import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Support extends Component {
    state = {
        support: 0,
    }

    handleChange = event => {
        this.setState({
            support: event.target.value,
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.support,
        });
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <Input autoFocus onChange={this.handleChange} type="number" placeholder="How well did you understand todays material?" />
                <Button onClick={this.handleClick}>Next</Button>
            </div>
        )
    }
}

export default connect()(Support);