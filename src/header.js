import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component{
    render(){
        return(
          <header>
            <div className="leftMenu">
                {this.props.children}
                <a href="#facebook"><i className="fa fa-facebook"></i></a>
                <a href="#facebook"><i className="fa fa-twitter"></i></a>
                <a href="#facebook"><i className="fa fa-google"></i></a>
                <a href="#facebook"><i className="fa fa-youtube-play"></i></a>
                <a href="#facebook"><i className="fa fa-soundcloud"></i></a>
            </div>
            <Link to="/" className="logo">PartyCheck</Link>

            <div className="rightMenu">
                <Link to="/about">About Us</Link>
                <Link to="/carriers">Careers</Link>
                <Link to="/contact">Contact Us</Link>
            </div>

        </header>
          );

    }
}


export default Header;
