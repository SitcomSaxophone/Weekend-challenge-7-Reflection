import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

class Admin extends Component {

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log(response.data);
            this.props.dispatch({ type: 'GET_FEEDBACK', payload: response.data });
        }).catch(error => {
            alert('Error making GET: ', error);
        });
    }

    componentDidMount() {
        this.getFeedback();
    }

    handleDelete = data => {
        swal({
            title: 'Are you sure you want to delete this feedback?',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
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
            } else {
                return;
            }
        })
    }

            render() {
                return(
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
                        <td><button onClick={() => this.handleDelete(item)}>Delete</button></td>
                    </tr>)}
                </tbody>
                <tfoot></tfoot>
            </table>

                    </div >

                )
    }
}

const mapStateToProps = state => ({ feedback: state.feedback });

export default connect(mapStateToProps)(Admin);