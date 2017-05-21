import React, { Component } from 'react';


class Login extends Component{
	render(){
		return(
			<div className="pageWrapper">
	        <div className="authComponent">
	          <h1>Check your party now! In HD!</h1>
	          <div className="formWrapper">
	            <form action>
	              <div className="username">
	                <input type="text" name="username" id="username" placeholder="username" />
	                <label htmlFor="username" />
	              </div>
	              <div className="email">
	                <input type="email" name="email" id="email" placeholder="email" />
	                <label htmlFor="email" />
	              </div>
	              <div className="password">
	                <input type="password" name="password" id="password" placeholder="password" />
	                <label htmlFor="password" />
	              </div>
	              <div className="bttnWrapper">
	                <button type="button" value="login" id="login">Login</button>
	                <p style={{marginTop: '5rem', display: 'inline-block', textAlign: 'center', width: '100%'}}>You dont have account? Sign up here:</p>
	                <a href="/register"><button type="button" value="register" id="register">Register</button></a>

	              </div>
	            </form>
	          </div>
	        </div>
	      </div>
		);
		}
	}


export default Login;
