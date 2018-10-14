import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Admin extends Component {

    handleDelete = data => event => {
        event.preventDefault();

        axios({
            method: 'DELETE',
            url: `/feedback/${data.id}`,
            params: data
        }).then(() => {
            // this.props.dispatch({
        //     type: 'DELETE_FEEDBACK',
        //     payload: data,
        // });
        }).catch(error => {
            alert('Error making DELETE to server: ', error);
        }); 
    }

    render() {
        return (
            <div>
                <h1>
                    Administrator
            </h1>
            
            <table>
                <thead>
                    <tr>
                        <th>Feelings</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.feedback.map(item => <tr key={item.id}>
                        <td>{item.feeling}</td>
                        <td>{item.understanding}</td>
                        <td>{item.support}</td>
                        <td>{item.comments}</td>
                        <td><button onClick={this.handleDelete(item)}>Delete</button></td>
                    </tr>)}
                </tbody>
                <tfoot></tfoot>
            </table>
            
            </div>

        )
    }
}

const mapStateToProps = state => ({ feedback: state.feedback });

export default connect(mapStateToProps)(Admin);