import React, { Component } from 'react'
import UserService from '../services/UserService';

class DashComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser:false,
    };
  }
  
  addStore =(e)=> {
    this.props.history.push(`/addStore/_add`);
  }
  searchStore =(e)=> {
    this.props.history.push(`/search`);
  }

  listStore =(e)=> {
    this.props.history.push(`/list-stores`);
  }



  componentDidMount() {
    const user = UserService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
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
        
        <div className="row">

        
        <div class="col-xl-9 d-flex justify-content-center mb-2" style={{marginLeft:"12%"}}>
                 
        <h2>Welcome {this.state.currentUser.username}</h2> 
        <br></br>
        </div>
        <br></br>
        <div class="col-xl-9 d-flex justify-content-center mb-3" style={{marginLeft:"12%"}}>
        <h3>Thankyou for joining know your nieghbourhood </h3>
          <br></br>
      </div>
      <br></br>
          <div class="col-xl-9 d-flex justify-content-center" style={{marginLeft:"12%"}}>
          
            <button type="button" className="btn btn-primary " onClick={this.addStore}> Add Store</button>
            <button className="btn btn-primary" onClick={this.searchStore} style={{ marginLeft: "10px" }}> Search Stores</button>
            <button className="btn btn-primary" onClick={this.listStore} style={{ marginLeft: "10px" }}> List Stores</button>
          </div>
        </div>
      </div>
    )
  }
}
export default DashComponent