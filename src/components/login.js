import React, { Component } from 'react';

const signUp = (props) =>{


  let checklogin = (e, email, password) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/v1/volounteers/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email:email, password:password})
    })
    .then(res => res.json())
    .then(data => {
      if (data.error){
        console.log(data.error)
      }
      else {
        console.log(data)
        props.nextStep(false, data)
      }
    })
  }


return(
  <div>
      <div className="container">
      <br/>
      <hr/>

      <div className="row">
        <aside className="col-sm-3"/>
      <div className="card">
      <article className="card-body">
      <button className="float-right btn btn-outline-primary" onClick={()=> props.signUp()}>Sign up</button>
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
                  checklogin(e,
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

export default signUp
