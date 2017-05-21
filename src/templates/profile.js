import React, { Component } from 'react';
class Profile extends Component{
	render(){
		return(<div className="pageWrapper">
        <h1>Profile</h1>
        <div className="profileFormComponent">
          <form action className="accountDetailsForm">
            <h2 className="accountDetails">Account Details</h2>
            <div className="username">
              <input type="text" name="username" id="username" placeholder="myUsername" />
              <label htmlFor="username" />
              <span>username</span>
            </div>
            <div className="email">
              <input type="email" name="email" id="email" placeholder="myemaill@example.com" />
              <label htmlFor="email" />
              <span>email</span>
            </div>
            <div className="password">
              <input type="password" name="password" id="password" placeholder="password" />
              <label htmlFor="password" />
              <span>password</span>
            </div>
            <div className="accountDetailsFormBttnWrapper">
              <button type="button" value="male" id="male">male</button>
              <button type="button" value="female" id="female">female</button>
            </div>
          </form>
          {/*-------- CHECKBOXEX ----------*/}
          <div className="settingsComponent">
            <div className="settingsCheckboxexWrapper">
              <h2 className="settings">Settings</h2>
              <div className="pushNotifications">
                <span>Push notifications</span>
                <input type="checkbox" name="pushNotifications" id="pushNotifications" />
                <label htmlFor="pushNotifications" />
              </div>
              <div className="useLocation">
                <span>Use location</span>
                <input type="checkbox" name="useLocation" id="useLocation" />
                <label htmlFor="useLocation" />
              </div>
              <div className="contact">
                <span>Contact me via email</span>
                <input type="checkbox" name="contact" id="contact" />
                <label htmlFor="contact" />
              </div>
            </div>
          </div>
          {/*-------- SAVE AND CANCEL BUTTONS ----------*/}
          <div className="actionBttnsWrapper">
            <button type="submit" className="saveProfileBttn">Save profile</button>
            <button type="button" className="cancelBttn">Cancel</button>
          </div>
        </div>
      </div>);
		}
	}


export default Profile;
