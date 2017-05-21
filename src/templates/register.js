import React, { Component } from 'react';

class Register extends Component{
  render(){
    return(

      <div className="pageWrapper">
              <div className="authComponent">
                <h1>Register!</h1>
                <div className="formWrapper">
                  <form action>
                    <div className="username fullName">
                      <input type="text" name="username" id="username" placeholder="username" />
                      <label htmlFor="username" />
                    </div>
                    <div className="email">
                      <input type="email" name="email" id="email" placeholder="email" />
                      <label htmlFor="email" />
                    </div>
                    <div className="password">
                      <input type="password" name="password" id="password" placeholder="enter password" />
                      <label htmlFor="password" />
                    </div>
                    <div className="bttnWrapper">
                      <button type="button" value="male" id="male">male</button>
                      <button type="button" value="female" id="female">female</button>
                      <button type="submit" value="login" id="login">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    );
  }
}









export default Register;
