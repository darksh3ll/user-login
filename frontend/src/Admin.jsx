import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Admin extends Component {

  render() {
    console.log('FROM Admin.jsx', this.props)
    return (
      <div className="App">
        <h1>You are in Admin panel !</h1>
        <h2>see your datas here :</h2>
        <p>{JSON.stringify(this.props.user)}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
