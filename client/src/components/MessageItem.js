import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import DefaultProfileImg from '../images/default-profile-image.jpg'

const MessageItem = ({date, profileImgUrl, text, username}) => (
	<div>
		<img src={profileImgUrl || DefaultProfileImg} alt={username} height='100' width='100' className='timeline-image'/>
		<div className='message-area'>
			<Link to='/'> @{username}</Link>
			<span className='text-muted'>
				<Moment className='text-muted' format='DD MM YYYY'>{date}
					
				</Moment>
			</span>
			<p>{text}</p>
		</div>
	</div>
)

export default MessageItem;