import React, { Component } from 'react';
import StoreService from '../services/StoreService';

class ViewStoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Store: {},
            storeid: this.props.match.params.storeid
        }
    }
    dashboard =(e)=> {
        this.props.history.push(`/dash`);
    }
    addStore =(e)=> {
        this.props.history.push(`/addStore/_add`);
    }
    search =(e)=> {
        this.props.history.push(`/search`);
    }
    viewStore(storeid) {
        this.props.history.push(`/view-store/${storeid}`);
    }
    componentDidMount() {
        StoreService.viewStore(this.state.storeid).then(res => {
            console.log("response data from backend " + JSON.stringify(res.data));
            this.setState({ Store: res.data });
        })
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
                <div className="card col-md-6 offset-md-3 p-2 bg-dark text-light">
                    <h3 className="text-center"> Store Details</h3>
                    <div className="card-body " style={{ marginLeft: "100px" }}>
                        
                        <div className="row">
                            <div class="col-xl-9 d-flex justify-content-center">
                                <strong><label> Store Id: </label></strong>
                                <div style={{ marginLeft: "10px" }}>{this.state.Store.storeid}</div>
                            </div>
                        </div>


                        <div className="row">
                            <div class="col-xl-9 d-flex justify-content-center">
                                <strong><label> Store Name: </label></strong>
                                <div style={{ marginLeft: "10px" }}>{this.state.Store.storeName}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-xl-9 d-flex justify-content-center">
                                <strong><label> Store Number: </label></strong>
                                <div style={{ marginLeft: "10px" }}>{this.state.Store.storeNumber}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div class="col-xl-9 d-flex justify-content-center">
                                <strong><label> Store Location: </label></strong>
                                <div style={{ marginLeft: "10px" }}>{this.state.Store.storeLocation}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewStoreComponent