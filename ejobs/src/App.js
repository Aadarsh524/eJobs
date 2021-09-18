import './App.css';
import Landing from './Components/Landing/Landing';
import Register from './Components/Account/Register';
import Login from './Components/Account/Login';
import User from './Components/LoggedUser/User';
import React  from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken.js'
import  setCurrentUser from './actions/authAction.js'
import store from './store.js'
import { clearCurrentProfile } from './actions/profileAction.js';
import PrivateRoute from './PrivateRoute.js'
import NotFound from "./NotFound"

const App = () => {

    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
     store.dispatch(setCurrentUser(decoded));
      store.dispatch(clearCurrentProfile());
    }


  return (
          <Router>
            <div className="app">
              <Switch>
                   <Route exact path="/" component={Landing} />
                  <Route  path="/login" component={Login} />
                  <Route  path="/register" component={Register} />
                  <PrivateRoute  path="/dashboard" component={User} />
                  <PrivateRoute  path="/inbox" component={User} />
                  <PrivateRoute  path="/allprojects" component={User} />
                  <PrivateRoute  path="/postproject" component={User} />
                  <PrivateRoute  path="/profile" component={User} />
                  <PrivateRoute  path="/editProfile" component={User} />
                  <PrivateRoute  path="/addCredentials" component={User} />
                  <PrivateRoute  path="/asFreelancer" component={User} />
                  <PrivateRoute  path="/asClient" component={User} />
                  <Route component={NotFound} />



              </Switch>
            </div>
          </Router>
  );
}

export default App;
