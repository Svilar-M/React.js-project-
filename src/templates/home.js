import {Link} from 'react-router';
import React, { Component } from 'react';


class Home extends Component {
      render(){
        return(
          <div className="pageWrapper">
              <h1>PartyCheck Index</h1>
              <div className="pageIndex">


                  <Link to="/login">Login / Register</Link>
                  <Link to="/profile">Profile</Link>
                  <Link to="/clubs">Clubs</Link>
                  <Link to="/rate">Rate</Link>

              </div>
          </div>
          );
      }
}


export default Home;
