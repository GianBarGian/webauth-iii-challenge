import React, { Component } from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import LoginRegister from './components/LoginRegister';
import Users from './components/Users';


class App extends Component {
  logout = e  => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.replace('/loginregister')
  }
  
  render() {
    return (
      <div className="App">
        <nav>  
          <NavLink to="/users">Users</NavLink>
          {
            localStorage.getItem('token')
              ? <button onClick={e => this.logout(e)}>LogOut</button>
              : <NavLink to="/loginregister">Login/Signup</NavLink>
          }
        </nav>

        <Route path="/loginregister" component={LoginRegister}/>
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
