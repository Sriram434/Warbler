import {apiCall} from '../../services/api'
import {addError} from './error'
import {LOAD_MESSAGES, REMOVE_MESSAGES} from '../actionTypes'

export const loadMessages = messages => ({
	type: LOAD_MESSAGES,
	messages
})

//Fetching messages from backend(Server)
export const fetchMessages = () => dispatch => {
	return dispatch => {
		return apiCall('get','/api/messages')
		//Addding fetched messages to loadMessages function
		.then(res => {dispatch(loadMessages(res))})
		//Addding error 
		.catch( err => {dispatch(addError(err.message))})
	}
}




export const postMessage = text => (dispatch, getState) => {
	let {currentUser} = getState()
	const id = currentUser.user.id
	return apiCall('post', `/api/users/${id}/messages`, {text})
	.then(res => {})
	.catch(err => dispatch(addError(err.message)))
}