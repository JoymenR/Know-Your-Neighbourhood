import axios from "axios";
const API_URL = "http://localhost:8080/login";
class AuthService {
  login(users) {
    console.log("This is login service"+ JSON.stringify(users));
    return axios.post(API_URL,users)
                .then(response => {
                  console.log("In Service "+ JSON.stringify(response.data.username));
                  if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                  }
                  return response.data;     
                });             
  }

  logout() {
    localStorage.removeItem("user");
  }

  createUser(users) {
    console.log("Register New User");
    return axios.post("http://localhost:8080/users/api" ,users);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();