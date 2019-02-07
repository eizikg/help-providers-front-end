  import React, { Component } from 'react';
// import logo from './logo.svg';
import WelcomePage from './containers/welcomePage'
import './App.css';
import LoginPage from './containers/loginpage.js'
import GroupPage from './containers/GroupPage.js'
import MemberPage from './containers/memberPage'
import MemberPage1 from './containers/memberPage1'
import Example from './components/Example.js'


class App extends Component {
state={
  loggedIn: false,
  hasGroup: false,
  step: 0,
  auth_token: null,
  user: {},
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
     console.log(data.id)
     if (!data.error) {
       this.setState({
         user: data,
         loggedIn: true
       })
     }
   })
  }
}

logOut =() => {
  localStorage.removeItem("token")
  this.setState({
    user: [],
    loggedIn: false
  })
}

nextStep = (is_new_user=false, user_object) => {
  // console.log(this.state.)
  let user_id
  if (user_object.user){
  user_id = user_object.user.id
  console.log(user_id)
  localStorage.token = user_object.auth_token
  }
  else {
    user_id = user_object.id
  }
  let user
  if (user_object.user){
  user = user_object.user
  localStorage.token = user_object.auth_token
  }
  else {
    user = user_object
  }
  console.log(user_id)
  if (is_new_user){
    this.setState({
      step:1,
      user_object:user_object.user
    })
  }
  else {
 console.log(user_id)
  fetch(`http://localhost:3000/api/v1/volounteers/${user_id}`, {
    method: "GET",
    headers: {"Content-Type": "application/json",
    Authorization: localStorage.token}
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let group = data.groups
    if (group.length > 0 ){
    this.setState({
      user: user,
      step: 2
    })
  }
  else {
    this.setState({
      // user: user_object.user,
      step: 1
    })
  }
  })
}
}

memberRoute= (user) => {
  console.log(this.state.user)
  this.setState({
    step: 2,
    user: user
  })
}



  render() {
    if (this.state.step === 0){
      return <WelcomePage
        loggedIn={this.state.loggedIn}
        nextStep={this.nextStep}
        memberRoute={this.memberRoute}
        logOut={this.logOut}
        user={this.state.user}
        />
    }

    else if (this.state.step === 1 ){
      return <GroupPage
        user={this.state.user}
        memberRoute={this.memberRoute}
        />
    }

    else if (this.state.step === 2){
      return <MemberPage1
        user={this.state.user}
        />
    }
      else if (this.state.step === 3){
      return (<Example />)
    }
  }
}

export default App;
