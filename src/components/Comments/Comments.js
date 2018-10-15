import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = event => {
        this.setState({
            comments: event.target.value,
        });
    }


    handleClick = async event => {
        event.preventDefault();

        await this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments,
        });
        await this.sendFeedback();
        await this.props.history.push('/success');

    }

    sendFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.newFeedback
        }).then(response => {
            console.log(response);
        }).catch(error => {
            alert('Error making POST: ', error);
        });
    }

    render() {
        return (
            <Card className="inputDiv">
                <CardContent>
                    <h2>
                        Please leave any comments you have.
                </h2>
                </CardContent>
                <CardActions className="buttons">
                    <Input className="input" autoFocus value={this.state.comments} onChange={this.handleChange} type="text" placeholder="Leave a comment!" />
                    <Button onClick={this.handleClick}>Submit Feedback</Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = state => ({ newFeedback: state.newFeedback });

export default connect(mapStateToProps)(Comments);