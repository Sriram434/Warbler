import {LOAD_MESSAGES, REMOVE_MESSAGES} from '../actionTypes'

const messages = (state=[],action) => {
	switch (action.type){
		case LOAD_MESSAGES:
			console.log({...action.messages})
			return [...action.messages]
			
		default :
			return state
	}
}


export default messages;