import React from 'react'
import DefaultProfileImg from '../images/default-profile-image.jpg'

const UserAside = ({profileImageUrl, userName}) => (
	<aside className='col-sm-2'>
		<div className='panel panel-default'>
			<div className='panel panel-default'>
				<img src={ profileImageUrl || DefaultProfileImg}  alt={userName} className='img-thumbnail mt-3' />
			</div>
		</div>
	</aside>
)

export default UserAside;