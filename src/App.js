import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import All from './All';
import Signup from './Authentication/signup';
import Login from './Authentication/login';
// import Navbar from "./header/navbar";
// import Navbar1 from "./header1/header1";
import UpdateProfile from './updateProfile/UpdateProfile';
import PrivateRoute from './PrivateRoute';
import ForgoatPassword from './forgoatPassword/ForgoatPassword';
import ShirtAll from "./trendingProducts/shirtAll";
// import Register from "./signup/signup";



function App() {
  return (
    <React.Fragment>
    <div className="App">
    {/* <Navbar />
      <Navbar1 /> */}
    <Switch>
      <PrivateRoute exact path="/" component={All} />
      <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/shirtAll" component={ShirtAll} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgoat-password" component={ForgoatPassword} />
      
      
      <Redirect to="/login" />
    </Switch>
    </div>
    </React.Fragment>
  );
}

export default App;
