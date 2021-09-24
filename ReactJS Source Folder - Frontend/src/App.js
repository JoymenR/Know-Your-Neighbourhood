import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import DashboardComponent from './components/DashboardComponent';
import AddStoreComponent from './components/AddStoreComponent';
import ViewStoreComponent from './components/ViewStoreComponent';
import SearchStoreComponent from './components/SearchStoreComponent';
import ListStoreComponent from './components/ListStoreComponent';
import AboutUsComponent from './components/AboutUsComponent';
import ContactUsComponent from './components/ContactUsComponent';
import TermsConditionCompnent from './components/TermsConditionCompnent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import FbDetailsComponent from './components/FbDetailsComponent';

function App() {
  

  return (

    
    <div>
      <HeaderComponent></HeaderComponent>
      <Router>
        <div className="container-fluid" style={{ padding: "0px" }}>
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/users" component={HomeComponent}></Route>
            <Route path="/home" component={HomeComponent}></Route>
            <Route path="/register" component={RegisterComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/dash" component={DashboardComponent}></Route>
            <Route path="/addStore/:storeid" component={AddStoreComponent}></Route>
            <Route path="/search" component={SearchStoreComponent}></Route>
            <Route path="/search-store/:searchKeyword" component={SearchStoreComponent}></Route>
            <Route path="/view-store/:storeid" component={ViewStoreComponent}></Route>
            <Route path="/list-stores" component={ListStoreComponent}></Route>
            <Route path="/about" component={AboutUsComponent}></Route>
            <Route path="/contact" component={ContactUsComponent}></Route>
            <Route path="/terms" component={TermsConditionCompnent}></Route>
            <Route path="/fbdashboard" component={FbDetailsComponent}></Route>
          </Switch>
        </div>
      </Router>
      <FooterComponent></FooterComponent>
    </div>
  );
}
export default App;
