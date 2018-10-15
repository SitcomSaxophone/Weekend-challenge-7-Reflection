import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
            <Card className="inputDiv">
                <CardContent>
                    <h2>
                        Do you feel supported by staff today?
                </h2>
                </CardContent>
                <CardActions className="buttons">
                    <Input className="input" autoFocus onChange={this.handleChange} type="number" placeholder="Answer with a number 1 - 5" />
                    <Button onClick={this.handleClick}>Next</Button>
                </CardActions>
            </Card>
        )
    }
}

export default connect()(Support);