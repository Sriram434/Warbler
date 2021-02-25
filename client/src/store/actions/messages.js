import {apiCall} from '../../services/api'
import {addError} from './error'
import {LOAD_MESSAGES, REMOVE_MESSAGE} from '../actionTypes'

export const loadMessages = messages => ({
	type: LOAD_MESSAGES,
	messages
})

export const removeMessage = id => ({
	type: REMOVE_MESSAGE,
	id
})

//Fetching messages from backend(Server)
export const fetchMessages = () => dispatch => {
	return apiCall('get','/api/messages')
	//Addding fetched messages to loadMessages function
	.then(res => {dispatch(loadMessages(res))})
	//Addding error 
	.catch( err => dispatch(addError(err.message)))
}

//Post messages 
export const postMessage = text => (dispatch, getState) => {
	let {currentUser} = getState()
	const id = currentUser.user.id
	return apiCall('post', `/api/users/${id}/messages`, {text})
	.then(res => {})
	.catch(err => dispatch(addError(err.message)))
}

//Remove the messages
export const deleteMessage = (user_id, message_id) => dispatch => {
    return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
        .then(() => dispatch(removeMessage(message_id)))
        .catch(err => dispatch(addError(err)));
};

