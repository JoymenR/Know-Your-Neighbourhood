export default function authHeader() {
	//checking the token/ if the user has key or not
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
     return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
   // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return {};
  }
}