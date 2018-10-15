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
        // change the value on typing into input field
        this.setState({
            comments: event.target.value,
        });
    }


    handleClick = async event => {
        // prevent the entire page from reloading
        event.preventDefault();
        // wait to dipatch the state value to Redux
        await this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.comments,
        });
        // wait to send feddback to server
        await this.sendFeedback();
        // wait to link to next page
        await this.props.history.push('/success');

    }

    sendFeedback = () => {
        // send feedback from the Redux store to the database, via the server
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.props.newFeedback
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
                    <Button variant="outlined" onClick={this.handleClick}>Submit Feedback</Button>
                </CardActions>
            </Card>
        )
    }
}

// Communicate with Redux
const mapStateToProps = state => ({ newFeedback: state.newFeedback });

export default connect(mapStateToProps)(Comments);