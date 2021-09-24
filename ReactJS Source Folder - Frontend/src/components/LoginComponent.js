import React, { Component } from 'react';
import UserService from '../services/UserService';
import FacebookLogin from 'react-facebook-login';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            userName: '',
            userPassword: '',
            error_message: ''
        }
    }
    addUser = (e) => {
        this.props.history.push(`/register`);
    }
    login = (e) => {
        this.props.history.push(`/login`);
    }
    home = (e) => {
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
    loginUser = (e) => {
        e.preventDefault();
        console.log('this is login method');
        let users = { userName: this.state.userName, userPassword: this.state.userPassword };

        UserService.login(users).then(
            () => {
                this.props.history.push("/dash");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    errorMessage: resMessage,
                });
            }
        );

    }

    facebookResponse = (response) => {
        localStorage.setItem("user", JSON.stringify(response));
        this.setState({ ...this.state, user: response });
        this.props.history.push("/fbdashboard");
    };

    cancel = (e) => {
        this.props.history.push('/');
    }

    render() {
        const componentClicked = () => { console.log("Clicked!"); };

        const LoginButton = ({ facebookResponse }) => (
            <FacebookLogin
                appId="1253788008369326"
                appSecret="f1b4d1aaf3504f95d1f5469b5bc1fe57"
                // autoLoad
                fields="name,email,picture"
                onClick={componentClicked}
                callback={facebookResponse} />  
        );


        const bg = {
            overflowX: "hidden",
            width: "100%",
            margin: "0px",
            height: "696px",
            align: "center",
            backgroundImage: `url("https://bit.ly/3cbk1iU")`,
            backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
        };

        return (
            <div style={bg}>


                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <div className="card-body">
                                <h3 className="text-center">Login</h3>
                                <form>

                                    {this.state.errorMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {" "}
                                            {this.state.errorMessage}{" "}
                                        </div>
                                    )}
                                    <div className="form-floating ">

                                        <input required placeholder="Enter Your User Name" id="floatingInput" name="userName" className="form-control mt-1"

                                            onChange={this.changeUserNameHandler} />
                                        <label for="floatingInput"> User Name</label>
                                    </div>
                                    <div className="form-floating mt-4">

                                        <input required placeholder=" Enter Your Password" id="floatingInput" name="userPassword" className="form-control mt-1"

                                            onChange={this.changeUserPasswordHandler} />
                                        <label for="floatingInput"> Password</label>
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div class="col-xl-9 d-flex justify-content-center" style={{ marginLeft: "10%" }}>


                                            <button className="btn btn-success" onClick={this.loginUser}>Login</button>
                                            <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>


                                        </div>

                                        <div style={{ marginLeft: "22%", marginTop: "5%" }}>

                                            {this.state.user == false && (
                                                <LoginButton facebookResponse={this.facebookResponse} />
                                            )}

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
export default LoginComponent

