import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../Home';
import Admin  from '../Admin';
import { connect } from 'react-redux'
import NOT_FOUND from '../404';

export class index extends Component {
  render() {
    console.log("FROM ROUTER", this.props)
    return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        {
          // All routes under this verification are reserved for admin users
          this.props.user.isAdmin &&
            <Route exact path='/admin' component={ Admin }/>
        }
        <Route path="/" component={ NOT_FOUND }/>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index))

