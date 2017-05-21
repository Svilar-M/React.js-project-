import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
          <footer>
          <div className="leftMenu">
              <a href="#apple"><i className="fa fa-apple"></i></a>
              <a href="#android"><i className="fa fa-android"></i></a>
              <a href="#win-phone"><img src="../images/winPhone.png" alt="windows phone store" /></a>
          </div>
          <div className="rightMenu">
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <p className="copy">Copyright &copy; <img src="../images/logoIndex.png" alt="PartyCheck logo" /> 2017.</p>
          </div>

        </footer>
          );

    }
}


export default Footer;
