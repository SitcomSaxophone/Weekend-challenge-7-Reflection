import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Admin extends Component {

    getFeedback = () => {
        // make axios request to server to get feedback from database
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            // dispatch the returned data to Redux store
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data });
        }).catch(error => {
            alert('Error making GET: ', error);
        });
    }

    componentDidMount() {
        this.getFeedback();
    }

    handleDelete = data => {
        // prompt the user to commit to deleting before proceeding
        swal({
            title: 'Are you sure you want to delete this feedback?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) { // run the axios request for deletion if the user clicks 'OK'  
                axios({
                    method: 'DELETE',
                    url: `/feedback/${data.id}`,
                    params: data
                }).then(() => {
                    this.getFeedback();
                }).catch(error => {
                    alert('Error making DELETE to server: ', error);
                });
                swal('Feedback successfully deleted!', {
                    icon: 'success',
                });
            } else { // cancel delete request if the user clicks 'Cancel'
                return;
            }
        })
    }

    render() {
        return (
            <div>
                <h2>
                    Administrator
            </h2>

                <table>
                    <thead>
                        <tr>
                            <th>Feelings</th>
                            <th>Understanding</th>
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
                            <td>
                                <IconButton onClick={() => this.handleDelete(item)}>
                                    <DeleteForeverIcon />
                                </IconButton>
                            </td>
                        </tr>)}
                    </tbody>
                    <tfoot></tfoot>
                </table>

            </div >

        )
    }
}

// Communicate with Redux
const mapStateToProps = state => ({ feedback: state.feedback }); 

export default connect(mapStateToProps)(Admin);