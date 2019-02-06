import React, { Component } from 'react';
// import logo from './logo.svg';
import WelcomePage from './containers/welcomePage'
import './App.css';
import LoginPage from './containers/loginpage.js'
import GroupPage from './containers/GroupPage.js'

class App extends Component {
state={
  loggedIn: false,
  hasGroup: false,
  step: 0,
  auth_token: null,
  user: {},
}


 has_group = ()=> {
   fetch('')
 }

 componentWillMount(){
   console.log("enter")
   if (localStorage.token){
   fetch('http://localhost:3000/api/v1/volounteers/profile', {
     method: "POST",
     headers: {"Content-Type": "application/json",
     Authorization: localStorage.token}
   })
   .then(res => {
     if (res.status === 401) {
       return ({ error: 'please log in'})
     }
     return res.json()
   })
   .then(data => {
     console.log(data)
     if (!data.error) {
       this.setState({
         user: data,
         loggedIn: true
       })
     }
   })
  }
}

nextStep = (is_new_user=false, user_object) => {
  // console.log(this.state.)
  localStorage.token = user_object.auth_token
  console.log(is_new_user)
  if (is_new_user){
    this.setState({
      step:1,
      user_object:user_object.user
    })
  }
  else {

  fetch(`http://localhost:3000/api/v1/volounteers/${user_object.user.id}`, {
    method: "GET",
    headers: {"Content-Type": "application/json",
    Authorization: localStorage.token}
  })
  .then(res => res.json())
  .then(data => {
    let group = data.groups
    if (group.length > 0 ){
    this.setState({
      user: user_object.user,
      step: 2
    })
  }
  else {
    this.setState({
      user: user_object.user,
      step: 1
    })
  }
  })
}
}



  render() {
    if (this.state.step === 0){
      return <WelcomePage
        loggedIn={this.state.loggedIn}
        nextStep={this.nextStep}
        />
    }

    else if (this.state.step === 1 ){
      return <GroupPage
        user={this.state.user}
        />
    }
  }
}

export default App;
