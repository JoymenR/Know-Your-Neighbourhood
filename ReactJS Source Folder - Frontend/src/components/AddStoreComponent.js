import React, { Component } from 'react';
import StoreService from '../services/StoreService';

class AddStoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeid: this.props.match.params.storeid,
            sName: '',
            sNumber: '',
            sLocation: ''
        }
    }
    dashboard =(e)=> {
        this.props.history.push(`/dash`);
    }
    addStore =(e)=> {
        this.props.history.push(`/addStore/_add`);
    }
    searchStore =(e)=> {
        this.props.history.push(`/search`);
    }
    changeStoreNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ sName: event.target.value });
    }
    changeStoreNumberHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ sNumber: event.target.value });
    }
    changeStoreLocationlHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ sLocation: event.target.value });
    }

    getTitle(){
        if(this.state.storeid === '_add'){
            return <h3 className="text-center">Add Store</h3>
        }else{
            return <h3   className="text-center">Update Store</h3>
        }
    }
    // saveStore =(e)=> {
    //     e.preventDefault();
    //     console.log('this is save method');
    //     let store = {
    //         storeName: this.state.storeName, storeNumber: this.state.storeNumber, storeLocation: this.state.storeLocation
    //     };
    //     StoreService.addStore(store).then(res => {
    //         console.log("create component" + JSON.stringify(res.data));
    //         this.props.history.push('/dash');
    //     });
    // }


    saveOrUpdateStore = (e) => {

        e.preventDefault();
        console.log('this is save method');

        let store = {
            storeName: this.state.sName, storeNumber: this.state.sNumber, storeLocation: this.state.sLocation
        };

        if(this.state.storeid ==='_add'){
            console.log("This is save method "+this.state.storeid);
            StoreService.addStore(store).then(res=>{
            console.log("the response from spring is "+JSON.stringify(res.data));
             this.props.history.push('/dash');

        });

        }else {
             console.log("This is update method "+this.state.storeid);
             StoreService.updateStore(this.state.storeid, store).then(res=>{
            console.log("the response from spring is "+JSON.stringify(res.data));
             this.props.history.push('/list-stores');

        });
        }
   
    }

    cancel = (e) => {
        this.props.history.push('/dash');
    }

    componentDidMount(){
        if(this.state.storeid === '_add'){
            return
        }else{
            StoreService.viewStore(this.state.storeid).then((res)=>{
                console.log(" Component Didmount the user detail "+ JSON.stringify(res.data));
                let store=res.data;

                this.setState({
                    sName:store.storeName,
                    sNumber:store.storeNumber,
                    sLocation:store.storeLocation
                });
            })

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
                <div className="container">
                   
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">

                            <div className="card-body">

                            {
                                    this.getTitle()
                                }          
                            <br></br>
                                <form>
                                    <div className="form-group">
                                        <label> Store Name </label>
                                        <input placeholder="Enter the Store Name" name="sName" className="form-control mt-1"  value={this.state.sName}

                                            onChange={this.changeStoreNameHandler} />
                                    </div>
                                    <div className="form-group mt-4">
                                        <label> Store Number </label>
                                        <input placeholder="Enter the Store Number" name="sNumber" className="form-control mt-" value={this.state.sNumber}

                                            onChange={this.changeStoreNumberHandler} />
                                    </div>

                                    <div className="form-group mt-4">
                                        <label> Store Location </label>
                                        <input placeholder="Enter the Store Location" name="sLocation" className="form-control mt-1" value={this.state.sLocation}

                                            onChange={this.changeStoreLocationlHandler} />
                                    </div>
                                    <br></br>
                                    <div className="row">
                                        <div class="col-xl-9 d-flex justify-content-center" style={{marginLeft:"10%"}}>
                                            <button className="btn btn-success" onClick={this.saveOrUpdateStore}>Save</button>
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
export default AddStoreComponent

