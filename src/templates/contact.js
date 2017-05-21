import React, { Component } from 'react';






class Contact extends Component {
  render() {
    return (
      <div className="pageWrapper">
      <div className="contactUsComponent">
        <h1>Contact Us</h1>

        <p className="emailInfo">
            <a href="mailto:info@partycheck.com" className="icon"><i className="fa fa-envelope-o"></i></a>
            info@partycheck.com
        </p>
        <p>
            <a href="https://goo.gl/maps/sDd5DSdg5P12" target="_blank" className="icon"><i className="fa fa-map-marker"></i></a>
            1427 Brett Place <br />
            San Pedro, CA 90732 <br />
            USA
        </p>
    </div>
    </div>
    );
  }
}





export default Contact;
