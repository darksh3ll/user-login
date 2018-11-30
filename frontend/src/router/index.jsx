import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        {
          // All routes under this verification are reserved for admin users
          // this.props.authentification.user.userData.isAdmin &&
          // <Route exact path='/admin' component={Admin}/>
        }
      </Switch>
    )
  }
}
