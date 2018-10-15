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

export default connect()(Understanding);