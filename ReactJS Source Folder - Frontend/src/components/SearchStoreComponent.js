import React, { Component } from 'react';
import StoreService from '../services/StoreService';

class SearchStoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Store: [],
            searchKeyword: this.props.match.params.searchKeyword
            
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
    viewStore(storeId) {
        this.props.history.push(`/view-store/${storeId}`);
    }
    componentDidMount() {
        StoreService.searchStore(this.state.searchKeyword).then((res) => {
            this.setState({ Store: res.data });
        });
    }
    changeSearchHandler = (event) => {
        console.log(event.target.value);
        this.setState({ searchKeyword: event.target.value });
    }
    searchStore =(searchKeyword)=> {
        console.log("search Store Method " + searchKeyword);
        this.props.history.push(`/search-store/${searchKeyword}`);
 
    }
    
    render() {

        const bg = {
            overflowX: "hidden",
            width: "100%",
           
        margin: "0px",
        height: "696px",
        align: "center",
        backgroundImage:`url("https://www.xmple.com/wallpaper/purple-linear-blue-gradient-2732x2048-c2-ee82ee-4169e1-a-165-f-14.svg")`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
          };

        return (
            <div style={bg}>
                <br></br>

                <div class="col-xl-12 d-flex justify-content-center container">
                    <form className="form-inline">
                        <div className="row">
                            <div class="col-xl-9 d-flex justify-content-center">
                                <input className="form-control" type="text" placeholder="Search..." value={this.state.searchKeyword} onChange={this.changeSearchHandler} />
                                <button onClick={() => this.searchStore(this.state.searchKeyword)} className="btn btn-info" style={{ marginLeft: "40px" }}>Search</button>
                            </div>
                        </div>
                        <br></br>
                    </form>
                </div>

                <h2 className="text-center">Search Store Results</h2>
                <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    <table className="table table-dark table-bordered ">

                        <thead>
                            <tr>
                                <th class="text-center">Store Id</th>
                                <th class="text-center">Store Name</th>
                                <th class="text-center">Store Number</th>
                                <th class="text-center">Store Location</th>
                                <th class="text-center"> Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                this.state.Store.map(
                                    
                                    store =>
                                    
                                        <tr key={store.storeid}>
                                            <td class="text-center"> {store.storeid}</td>
                                            <td class="text-center"> {store.storeName} </td>
                                            <td class="text-center"> {store.storeNumber}</td>
                                            <td class="text-center"> {store.storeLocation}</td>
                                            <td>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewStore(store.storeid)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                </div>

            </div>
        )
    }

}

export default SearchStoreComponent

