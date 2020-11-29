import React from 'react';
import { Link } from 'react-router-dom';

const EditUser = props => (
    <tr>
        <td>{props.todo.firstname}</td>
        <td>{props.todo.lastname}</td>
        <td>{props.todo.age}</td>
        <td>{props.todo.gender}</td>
        <td>
        <Link to={"/edit/"+props.todo._id}>edit</Link> | <a href="#" onClick={() => {props.deleteTodo(props.todo._id)}}>delete</a>
        </td>
    </tr>
)

export default EditUser
