import React, { Component } from 'react';
import {browserHistory} from 'react-router';
class ClubDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			club: {}
		}
	}
	componentWillMount() {
		if(!this.props.params.name) {

			browserHistory.push('/clubs');
			return;
		}


		this.props.clubs.map(club => {
			if(club.slug === this.props.params.name) {
				this.state.club = club;
			}
		})
	}
	render() {
		return(
			<div>
	        <div className="pageWrapper">
	        </div>
	        <div className="clubDetailsWrapper">
	          <div className="clubDetailsHeadline">
	            <h1>{this.state.club.name}</h1>
	            <div className="rateWrapper">
	              <p>{this.state.club.rating}</p>
	            </div>
	          </div>
	          <div className="bttnWrapper">
	            <button type="button">
	              <span className="bttnInnerWrapper" />
	            </button>
	          </div>
	        </div>
	        <div className="subFooterClubDetails">
	          <div className="subFooterWrapper">
	            <p>Happy hour tonight!<br /> Absolut vodka 5$</p>
	          </div>
	        </div>
	      </div>
	);
		}
	}


export default ClubDetails;
