import axios from 'axios';
import authHeader from './AuthorizationHeader';

const Store_BASE_URL = "http://localhost:8080/store_controller/api/store";

class StoreService {
    addStore(store) {
        console.log("Create Store" + JSON.stringify(store) + JSON.stringify({headers:authHeader()}));
        return axios.post(Store_BASE_URL, store, {headers:authHeader()});
    }
    searchStore(searchKeyword) {
        console.log("Search keyword is  " + searchKeyword + JSON.stringify({headers:authHeader()}));
        return axios.get("http://localhost:8080/store_controller/api/search_store" + '/' + searchKeyword, {headers:authHeader()});
    }
    viewStore(StoreId) {
        console.log("View Store from service " + StoreId);
        return axios.get("http://localhost:8080/store_controller/api/store" + '/' + StoreId, {headers:authHeader()});
        
    }

    getStores(){
        console.log("Get All Stores");
        return axios.get(Store_BASE_URL, {headers:authHeader()});
    }

    deleteStore(StoreId){
        console.log("Delete Store from service "+StoreId);
        return axios.delete(Store_BASE_URL + '/' + StoreId, {headers:authHeader()});
    }

    updateStore(StoreId,store){
        console.log("Save New User");
        return axios.put(Store_BASE_URL + '/' + StoreId, store, {headers:authHeader()});
    }
}
export default new StoreService()