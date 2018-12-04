import React, { Component } from 'react'
import { connect } from 'react-redux'
const axios = require('axios');

export class Admin extends Component {
  state = {
    file: ''
  }

  submitFile(e){
    e.preventDefault();

    const data = new FormData()
    data.append('avatar', this.state.file, this.state.file.name)
    
    axios.post('upload', data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  render() {
    console.log('FROM Admin.jsx', this.state)
    return (
      <div className="App">
        <h1>You are in Admin panel !</h1>
        <h2>see your datas here :</h2>
        <p>{JSON.stringify(this.props.user)}</p>
        <form onSubmit={(e) => this.submitFile(e) }>
          <label>
            Fichier
            <input 
              onChange={(e) => this.setState({file: e.target.files[0]})}
              type='file' name='file'/>
          </label>
            <input type='submit' name='submit'/>
        </form>
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
