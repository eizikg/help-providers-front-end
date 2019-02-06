import React, { Component } from 'react';
import SignUp from '../components/signUp.js'
import LogIn from '../components/login.js'
class loginPage extends Component {

  state={
    auth_token: null,
    loggedIn: false,
    signUp: true
  }

  checklogin = (e, email, password) => {
    e.preventDefault()
    // debugger
    fetch('http://localhost:3000/api/v1/volounteers/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user:{email: email, password: password}})
    })
    .then(res => res.json())
    .then(data => {
      if (!data.error){
      this.setState({
      auth_token: data,
      loggedIn: true
    })
  }
    console.log(data)
  }
  )
  }



  createAccount = (e, first_name, last_name, email, password) => {
    e.preventDefault()
    // debugger
    fetch('http://localhost:3000/api/v1/volounteers', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user:{first_name: first_name, last_name: last_name, email: email, password: password}})
    })
    .then(res => res.json())
    .then(data => {
    console.log(data)
  }
  )
  }

  render() {
    if (this.state.signUp){
    return <SignUp/>
  }
  else {
    return <LogIn/>
  }
  }
}

export default loginPage
