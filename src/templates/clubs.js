import React from 'react';
import { Link } from 'react-router';


var Clubs = React.createClass({
	getInitialState(){
		return{
		"success": true,
		}

	},

	render(){

		return(
			<div>
        <div className="pageWrapper">
          <h1 style={{margintop:'5rem'}}>Clubs</h1>
          <div className="clubsListComponent">
					{
						this.props.clubs.map(function(club, index){
								return(
									<Club
									   name={club.name}
										 key={index}
										 slug={club.slug}
										 rating={club.rating}
										 image={club.imageUrl}
										 video={club.videoUrl}
										 streaming={club.streaming}/>);
							  })
					}
          </div>
        </div>
        <div className="subFooterClubs">
          <div className="subFooterWrapper">
            <p>Happy hour tonight!<br /> 5</p>
          </div>
        </div>
      </div>
		);
		}
	});

var Club =  React.createClass({
			// collecting all points then return us the class for star
			clubRatingClass(rating){
				if(rating >= 4.5){
        return 'starFive';
			    }else if(rating >= 3.8){
			         return 'starFour';
			    }else if(rating >= 3){
			        return 'starThree';
			    }else if(rating >= 2){
			        return 'starTwo';
			    }else if(rating < 1){
			        return 'starZero';
			    }else{
			        return 'starOne';
			    }

			},
			//returns class activeClub if there is stream
			clubStreaming(stream){
				if(stream){
					return "activeClub";
				}
				return false;

			},
			render(){

				var rating = this.props.rating;
				var img = this.props.image;
				var divImage = {
    				backgroundImage : 'url(' + img + ')'
				};

				var stars = this.clubRatingClass(rating);
				var stream = this.clubStreaming(this.props.streaming);

				return(
					<div className={stream ? 'club activeClub' : 'club'} >
					{/* <div className={`club ${stream ? 'activeClub' : ''}`}> */}
						<div className="imgContainer specialClubStyle">
							<Link to={{
								pathname: '/clubDetails/' + this.props.slug
							}}>
								<div className="innerImgContainer" style={divImage}/>
							</Link>
						</div>
						<div className="rateContainer" className={stars}>
							<p className="rating">{rating}</p>
						</div>
					</div>
				);
			}
});



export default Clubs;
