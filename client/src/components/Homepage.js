import React from 'react';
import {Link} from 'react-router-dom'
import './Homepage.css'
import MessageTimeline from './MessageTimeline'

const Homepage = ({currentUser}) => {
	if(!currentUser.isAuthenticated){
		return(
			<div className='home-hero'>
				<h1> What's Happening </h1>
				<h4>New to Warbler </h4>
				<Link to='/signup' className='btn btn-primary'>Sign up here</Link>
			</div>
		)
	}
	
	return(
		
		<div>
			<MessageTimeline />
			<h3>We made it</h3>
		</div>
	)
	
}

export default Homepage;