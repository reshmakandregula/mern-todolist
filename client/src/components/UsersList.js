import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EditUser from './EditUser';

export default class UsersList extends Component {
    state = {
        user: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/Users/')
        .then(res => {
            this.setState({ user:  res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }

    deleteTodo = (id) =>{
        axios.delete('http://localhost:5000/Users/'+id)
        .then(res => console.log(res.data));
        this.setState({
            user: this.state.user.filter(todo => todo._id !== id)
        })
    }

    UserList= () => {
        return this.state.user.map(currentUser => {
            return <EditUser todo={currentUser} deleteTodo={this.deleteTodo} key={currentUser._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h2>Logged Users</h2>
                <table className="table">
                  <thead className="thead-light">
                      <tr>
                          <th>Firstname</th>
                          <th>Lastname</th>
                          <th>Age</th>
                          <th>Gender</th>
                      </tr>
                  </thead>
                  <tbody>
                      { this.UserList() }
                  </tbody>
                </table>
            </div>
        )
    }
}


