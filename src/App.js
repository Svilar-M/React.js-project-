import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import Footer from './footer';

import Home from './templates/home';
//All components goes here in main APP component

var App = React.createClass({

  render() {
    return (
      <div className="App">
          <Header />
          {/* Whole content goes here*/}
          { React.cloneElement(this.props.children, this.props) }
           <Footer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(App);
