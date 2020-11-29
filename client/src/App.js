import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={UsersList} />
      <Route path="/edit/:id" exact component={EditUser} />
      <Route path="/create" exact component={CreateUser} />
      </div>
    </Router>
  
  );
}

export default App;
