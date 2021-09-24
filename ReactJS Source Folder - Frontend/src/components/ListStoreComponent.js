import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ListStoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stores: []
        }
        this.deleteStore = this.deleteStore.bind(this);
        this.viewStore = this.viewStore.bind(this);
        this.editStore = this.editStore.bind(this);
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

    componentDidMount() {
        StoreService.getStores().then((res) => {
            this.setState({ stores: res.data });
        });
    }

    deleteStore(storeid) {
        console.log("hello" + storeid);
        StoreService.deleteStore(storeid).then(res => {
            this.setState({ stores: this.state.stores.filter(store => store.storeid !== storeid) });
        });
    }
    viewStore(storeId) {
        this.props.history.push(`/view-store/${storeId}`);
    }
    editStore(storeId) {
        console.log("This is update Store Id :" + storeId);
        this.props.history.push(`/addStore/${storeId}`);
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
                <h2 className="text-center">Stores List</h2>
         
                <div className="container" style={{ marginTop: "20px" }}>
                <div className="row">
                    <table  style={{ marginLeft: "15px"}} className="table table-dark table-bordered " >

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
                                this.state.stores.map(

                                    store =>

                                        <tr key={store.storeid}>
                                            <td class="text-center"> {store.storeid}</td>
                                            <td class="text-center"> {store.storeName} </td>
                                            <td class="text-center"> {store.storeNumber}</td>
                                            <td class="text-center"> {store.storeLocation}</td>
                                            <td class="text-center">
                                                <button
                                                    style={{ marginLeft: "10px" }}
                                                    onClick={() => this.viewStore(store.storeid)}
                                                    className="btn btn-primary">View </button>

                                                <button
                                                    style={{ marginLeft: "10px" }}
                                                    className="btn btn-success"
                                                    onClick={() => this.editStore(store.storeid)}>Update</button>

<button style={{marginLeft: "10px"}} onClick={ () => this.deleteStore(store.storeid)} className="btn btn-danger">Delete </button>

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

export default ListStoreComponent