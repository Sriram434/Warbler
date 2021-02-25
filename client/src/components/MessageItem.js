import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import DefaultProfileImg from '../images/default-profile-image.jpg'
import './MessageItem.css'

const MessageItem = 
	  ({date, profileImgUrl, text, username,removeMessage, isCorrectUser}) => (
	<div>
		<li className='list-group-item' style={{borderRadius: "20px"}}>
			<img src={profileImgUrl || DefaultProfileImg} alt={username} height='100' width='100' className='timeline-image'/>
			<div className='message-area'>
				<Link to='/' style={{textDecoration: "none"}}> @{username} &nbsp;</Link>
				<span className='text-muted'>
					<Moment className='text-muted' format='DD MMM YYYY'>
						{date}
					</Moment>
				</span>
				<p>{text}</p>
				{isCorrectUser && 
					(<a className='btn btn-sm btn-right btn-danger ml-2' onClick={removeMessage}> 
						delete </a>)}
				
			</div>
		</li>	
	</div>
)

export default MessageItem;