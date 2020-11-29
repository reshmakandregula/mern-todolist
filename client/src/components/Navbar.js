import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">TodoList</Link>
               <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="navbar-link">Users</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="navbar-link">Create User</Link>
                    </li>   
                </ul>
             </div>
        </nav>  
        );
    }
}


