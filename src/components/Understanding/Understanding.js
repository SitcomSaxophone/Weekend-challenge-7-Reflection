import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Understanding extends Component {

    state = {
        understanding: 0,
    }

    handleChange = event => {
        this.setState({
            understanding: event.target.value,
        });
    }

    handleClick = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding,
        });
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <Input autoFocus onChange={this.handleChange} type="number" placeholder="How well did you understand todays material?"/>

                <Button onClick={this.handleClick}>Next</Button>
            </div>
        )
    }
}

export default connect()(Understanding);