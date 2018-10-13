import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

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
            <div>
                <input onChange={this.handleChange} type="text" placeholder="Leave a comment!" />
                <button onClick={this.handleClick}>Submit Feedback</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ newFeedback: state.newFeedback });

export default connect(mapStateToProps)(Comments);