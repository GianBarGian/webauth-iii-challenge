import React, { Component } from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Users from './components/Users';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>  
          <NavLink to="/loginregister">Login/Signup</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>

        <Route path="/loginregister" component={LoginRegister}/>
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
