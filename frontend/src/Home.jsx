import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <form
          onSubmit={() => alert("submit")}
        >
          <label>
            Email :
            <input className="inputField" type="email" name="email"/>
          </label>
          <label>
            Mot de passe :
            <input className="inputField" type="password" name="password"/>
          </label>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    )
  }
}
