import React, { Component } from 'react';


class loginPage extends Component {

  state={
    auth_token: null,
    loggedIn: false,
    signUp: false
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

  signUp =() => {
    this.setState({
      signUp: true
    })
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
    if (!this.state.signUp){
    return(
      <div>


    <div className="container">
    <br/>
    <p className="text-center">More bootstrap 4 components on
    </p>
    <hr/>

    <div className="row">
    	<aside className="col-sm-3"/>
    <p>Login form style 1</p>
    <div className="card">
    <article className="card-body">
    <button className="float-right btn btn-outline-primary" onClick={()=> this.signUp()}>Sign up</button>
    <h4 className="card-title mb-10 mt-4">Sign in</h4>
    	 <form>
        <div className="form-group">
        	<label>Your email</label>
            <input name="" className="form-control" id="email" placeholder="Email" type="email"/>
        </div>
        <div className="form-group">
        	<button className="float-right" >Forgot?</button>
        	<label>Your password</label>
            <input className="form-control" id="password" placeholder="******" type="password"/>
        </div>
        <div className="form-group">
        <div className="checkbox">
          <label> <input type="checkbox"/> Save password </label>
        </div>
        </div>
        <div className="form-group">
            <button onClick= { (e) => {
                this.checklogin(e,
                  document.querySelector('#email').value,
                document.querySelector('#password').value
              )
            }
          } type="submit" className="btn btn-primary btn-block"> Login  </button>
        </div>
    </form>
    </article>
    </div>
  </div>
</div>
</div>
    )
  }
  else {
    return(
      <div>
        <div className="container">
        <div className="row centered-form">
        <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div className="panel panel-default">
        		<div className="panel-heading">
			    		<h3 className="panel-title">Please sign up for Commuinty Volounteers <small>It's free!</small></h3>
			 			</div>
			 			<div className="panel-body">
			    		<form role="form">
			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			                <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name"/>
			    					</div>
			    				</div>
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name"/>
			    					</div>
			    				</div>
			    			</div>

			    			<div className="form-group">
			    				<input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address"/>
			    			</div>

			    			<div className="row">
			    				<div className="col-xs-6 col-sm-6 col-md-6">
			    					<div className="form-group">
			    						<input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password"/>
			    					</div>
			    				</div>
			    			</div>

                <button onClick= { (e) => {
                    this.createAccount(e,
                      document.querySelector('#first_name').value,
                    document.querySelector('#last_name').value,
                    document.querySelector('#email').value,
                    document.querySelector('#password').value,
                  )
                }
              } type="submit" className="btn btn-primary btn-block"> Login  </button>

			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
      </div>
    )
  }
  }
}

export default loginPage
