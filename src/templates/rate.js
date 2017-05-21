import React, { Component } from 'react';
class Rate extends Component{
	render(){
		return(
			<div className="pageWrapper">
        <h1>Rate</h1>
        <div className="clubRateWrapper">
          <div className="club">
            <div className="imgContainer">
              <div className="innerImgContainer" />
            </div>
          </div>
          <div className="rateContainer">
            <img src="../images/fiveStar.png" role="presentation"/>
            <img src="../images/fiveStar.png" role="presentation"/>
            <img src="../images/noStar.png" role="presentation"/>
            <img src="../images/noStar.png" role="presentation"/>
            <img src="../images/noStar.png" role="presentation"/>
          </div>
          <div className="bttnWrapper">
            <button type="button">Rate</button>
            <button type="button">Cancel</button>
          </div>
        </div>
      </div>
);
		}
	}


export default Rate;
