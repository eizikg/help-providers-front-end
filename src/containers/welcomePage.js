import React, { Component } from 'react';
import Login from '../components/login'
import SignUp from '../components/signUp'

class welcomePage extends Component{

 state={
   step: 0
 }


  login = ()=> {
    this.setState({
      step:1
    })
  }

  signUp = ()=> {
    this.setState({
      step:2
    })
  }

  render(){
    console.log(this.props.user)
    if(this.state.step === 0){
    return (
      <div>
      <div className="container">
      <div className="navbar">
      { !this.props.loggedIn ?
        <div className="navbar-inner">
         <button type="button" className="btn btn-default" onClick={() => {this.signUp()}}>Create An Account</button>
          <button type="button" className="btn btn-primary" onClick={() => {this.login()}}>Login</button>
        </div>
        :
        <div className="navbar-inner">
        <button type="button" className="btn btn-default" onClick={() => {this.props.logOut()}}>Log Out</button>
        <button type="button" className="btn btn-primary" onClick={() => {this.props.nextStep(false, this.props.user)}}>Members</button>
        </div>
      }
      </div>
     </div>
      <div className="container">
      <div className="row">
      <img className="img-fluid" src="http://fieldservicenews.com/wp-content/uploads/2016/04/helping-hands-700-700x400.jpg" alt="First slide"/>
        <div className="banner-text">
            <h2>Lend a hand to your neighbor</h2>
            <p>Welcome to your local community. Together we can can help out each other. sign up today and find out what's happening in your neighborhood</p>
        </div>
    </div>
    </div>
    </div>
  )}
  else if (this.state.step == 1){
    return <Login
      nextStep={this.props.nextStep}
      />
  }
  else if (this.state.step == 2){
    console.log("signup")
    return <SignUp
      nextStep={this.props.nextStep}
      />
  }
  }


 }

export default welcomePage
