import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    state = {
        firstname:'',
        lastname:'',
        age:0,
        gender:'',
        users:[]
    }

    componentDidMount = () => {
        this.getBlogPost();
    }

    getBlogPost = () => {
        axios.get('/api')
        .then((res) => {
            const data = res.data;
            this.setState({users:data});
             console.log('data has been fetched!!');
        })
        .catch(() => {
            alert('error retriving data!!!');
        })
    }

componentDidMount() {
    axios.get('http://localhost:5000/add')
    .then(response => {
        if(response.data.length > 0) {
            this.setState({
                users: response.data.map(user => user.firstname),
                firstname:response.data[0].firstname
            })
        }
    })
}
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const userData = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            age:this.state.age,
            gender:this.state.gender
        }


        console.log(userData);

        axios.post('http://localhost:5000/add', userData)
            .then(res => console.log(res.data));

            window.location='/';
        this.setState({
            firstname:'',
            lastname:'',
            age:0,
            gender:''
        })
    }
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firstname: </label>
                        <br/>
                        <input type="text"
                        placeholder="Enter firstname"
                        name="firstname"
                        className="form-group"
                        value={this.state.firstname}
                        onChange={this.onChange}/>
                        {/* <select 
                        name="username" 
                        required 
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChange}>
                            {
                                this.state.users.map(user => {
                                    return <option key={user}>{user}</option>;
                                })
                            }
                        </select> */}
                    </div>
                    
                    <div className="form-group">
                        <label>Lastname: </label>
                        <br/>
                        <input type="text"
                        placeholder="Enter lastname"
                        name="lastname"
                        className="form-group"
                        value={this.state.lastname}
                        onChange={this.onChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Age: </label>
                        <br/>
                        <input type="number"
                        name="age"
                        className="form-group"
                        value={this.state.age}
                        onChange={this.onChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Gender:
                            <br/>
                        <select type="text" name="gender" className="form-group" value={this.state.gender} onChange={this.onChange}>
                          <option value="male">male</option>
                          <option value="female">female</option>
                          <option value="others">others</option> 
                        </select>
                        </label>
                         </div>

                         <div className="form-group">
                            <input type="submit" value="CreateUser" className="btn btn-primary" />
                         </div>
                </form>
            </div>
        )
    }
}


