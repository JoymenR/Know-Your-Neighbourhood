import React, { Component } from 'react'

class HomeComponent extends Component {
    constructor(props) {
        super(props)
    }
    addUser =(e)=> {
        this.props.history.push(`/register`);
    }
    login =(e)=> {
        this.props.history.push(`/login`);
    }
    home =(e)=> {
        this.props.history.push(`/home`);
    }
    about =(e)=> {
        this.props.history.push(`/`);
    }

    render() {
        // const bg = {
        //     overflowX: "hidden",
        //     width: "100%",
           
        // margin: "0px",
        // height: "696px",
        // align: "center",
        // backgroundImage:`url("https://www.xmple.com/wallpaper/purple-linear-blue-gradient-2732x2048-c2-ee82ee-4169e1-a-165-f-14.svg")`,
        // backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
        //   };

        return (
            <div>
                
                <div class="jumbotron bg-light p-4 ">
        <div class="container">
          <h2 class="display-3">Better Knowledge</h2>
          <p>Here you will find out the information of all the nearby stores along with their locations, numbers and much more. </p>
          <p> So what are you waiting for Join Us today.</p>
          <p><a class="btn btn-success btn-lg" href="/register" role="button">Register now &raquo;</a></p>
        </div>
      </div>

<br></br>
<br></br>
      <div class="container  bg-secondary " style={{marginBottom:"3%"}}>
  
        <div class="row">
          <div class="col-md-4">
            <h2>Fast</h2>
            <p>Here you will find out the information of all the nearby stores along with their locations, numbers and much more, Here you will find out the information of all the nearby stores along with their locations, numbers and much more</p>
            <p><a class="btn btn-success" href="/about" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-md-4">
            <h2>Informative</h2>
            <p>Here you will find out the information of all the nearby stores along with their locations, numbers and much more, Here you will find out the information of all the nearby stores along with their locations, numbers and much more </p>
            <p><a class="btn btn-success" href="/about" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-md-4">
            <h2>Easy To use</h2>
            <p>Here you will find out the information of all the nearby stores along with their locations, numbers and much more, Here you will find out the information of all the nearby stores along with their locations, numbers and much more</p>
            <p><a class="btn btn-success" href="/about" role="button">View details &raquo;</a></p>
          </div>
        </div>

      </div> 

            </div>
        )
    }
}
export default HomeComponent