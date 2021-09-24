import React, { Component } from 'react';
import UserService from '../services/UserService';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    login =(e)=> {
        this.props.history.push(`/login`);
    }
    home =(e)=> {
        this.props.history.push(`/`);
    }
    changeUserNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ userName: event.target.value });
    }
    changeUserPasswordHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ userPassword: event.target.value });
    }
    changeFirstNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ email: event.target.value });
    }
    saveUser = (e) => {
        e.preventDefault();
        console.log('this is save method');
        let users = { userName: this.state.userName, userPassword: this.state.userPassword, 
            firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email };
            UserService.createUser(users).then(res => {
            console.log("create component" + JSON.stringify(res.data));
            this.props.history.push('/login');
        });
    }
    cancel = (e) => {
        this.props.history.push('/');
    }

    render() {
        const bg = {
            overflowX: "hidden",
            width: "100%",
           
        margin: "0px",
        height: "696px",
        align: "center",
        backgroundImage:`url("https://bit.ly/3cbk1iU")`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
          };
        return (
            <div style={bg}>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">


                            <div className="card-body">
                                <h3 className="text-center">Register</h3>

                                <form>
                                    <div className="form-floating mt-3">
                                       
                                        <input placeholder=" User Name" id="floatingInput" name="firstName" className="form-control  mt-1"

                                            onChange={this.changeFirstNameHandler} />
                                             <label for="floatingInput" > First Name</label>
                                    </div>
                                    <div className="form-floating mt-3">
                                      
                                        <input placeholder=" Last Name" id="floatingInput" name="lastName" className="form-control  mt-1"

                                            onChange={this.changeLastNameHandler} />
                                             <label for="floatingInput">Last Name</label>
                                    </div>
                                    <div className="form-floating mt-3">
                                        
                                        <input placeholder=" User Name" id="floatingInput"name="email" className="form-control  mt-1"

                                            onChange={this.changeEmailHandler} />
                                            <label for="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating mt-3">
                                        
                                        <input placeholder=" User Name" id="floatingInput" name="userName" className="form-control  mt-1"

                                            onChange={this.changeUserNameHandler} />
                                            <label for="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating mt-3">
                                       
                                        <input placeholder="Password" id="floatingInput"name="userPassword" className="form-control  mt-1"

                                            onChange={this.changeUserPasswordHandler} />
                                             <label for="floatingInput">Password</label>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div class="col-xl-9 d-flex justify-content-center" style={{marginLeft:"10%"}} >
                                            <button className="btn btn-success" onClick={this.saveUser}>Register</button>
                                            <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default RegisterComponent