import React, { Component } from 'react';
import UserService from '../services/UserService'

class HeaderComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: false,
    };
  }

  componentDidMount() {
    const user = UserService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut = (e) => {
    UserService.logout();
  }

  render() {
    return (
      <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">  <img alt="logo" src="https://cdn.discordapp.com/attachments/835170579123535922/851186052756406343/kynpng.png" className="d-inline-block align-top" style={{ width: "120px" }} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/home">Home
            <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/terms">Terms & Conditions</a>
                </li>




                {this.state.currentUser && (
                  <li class="nav-item"  style={{ marginLeft: "440px" }}>
                    <a class="nav-link" href="/dash">Dashboard</a>
                  </li>
                )}
                {this.state.currentUser && (
                  <li class="nav-item" style={{ marginLeft: "5px" }}>
                    <a class="nav-link" href="/search">Search Stores</a>
                  </li>
                )}
                {this.state.currentUser && (
                  <li class="nav-item"  style={{ marginLeft: "5px" }}>
                    <a class="nav-link" href="/login" onClick={this.logOut}>Logout</a>
                  </li>
                )}




                {this.state.currentUser == false && (
                  <li class="nav-item btn btn-dark" style={{ padding: "0px", marginLeft: "560px" }}>
                    <a class="nav-link" href="/register">Register</a>
                  </li>
                )}

                {this.state.currentUser == false && (
                  <li class="nav-item btn btn-dark" style={{ padding: "0px", marginLeft: "10px" }}>
                    <a class="nav-link" href="/login">Login</a>
                  </li>
                )}



              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default HeaderComponent

