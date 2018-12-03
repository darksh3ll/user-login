import React, { Component } from 'react'
import { connect } from 'react-redux'
import authAction from './store/authAction'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  signUser(e){
    e.preventDefault()
    axios.post('/auth/signin/', {
      email: this.state.email,
      password: this.state.password,
    })
    .then((response) => {
      this.props.authAction(response.data)
    })
    .catch(err => {
      alert('ERROR !')
    })
  }

  render() {
    console.log(this.props)
    if(this.props.user.isAdmin){
      return (
        <div className="App">
          <p>You are connected !</p>
          <Link to="admin">GO TO ADMIN !</Link>
        </div>
      )
    }
    return (
      <div className="App">
        <Link to="/admin">GO TO ADMIN !</Link>
        <form
          onSubmit={(e) => this.signUser(e)}
        >
          <label>
            Email :
            <input 
              className="inputField" 
              type="email" 
              name="email"
              onChange={(e) => this.setState({email: e.target.value})}
            />
          </label>
          <label>
            Mot de passe :
            <input 
              className="inputField" 
              type="password" 
              name="password"
              onChange={(e) => this.setState({password: e.target.value})}
            />
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  authAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
