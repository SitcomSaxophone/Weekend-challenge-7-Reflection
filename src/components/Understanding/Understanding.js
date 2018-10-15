import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Understanding extends Component {

    state = {
        understanding: 0,
    }

    handleChange = event => {
        // change the value on typing into input field
        this.setState({
            understanding: event.target.value,
        });
    }

    handleClick = event => {
        // prevent the entire page from reloading
        event.preventDefault();
        // dipatch the state value to Redux
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: this.state.understanding,
        });
        // link to the next page
        this.props.history.push('/support');
    }

    render() {
        return (
            <Card className="inputDiv">
                <CardContent>
                    <h2>
                        How well did you understand todays material?
                </h2>
                </CardContent>
                <CardActions className="buttons">
                    <Input className="input" autoFocus onChange={this.handleChange} type="number" placeholder="Answer with a number 1 - 5" />
                    <Button variant="outlined" onClick={this.handleClick}>Next</Button>
                </CardActions>
            </Card>
        )
    }
}

// Communicate with Redux
export default connect()(Understanding);