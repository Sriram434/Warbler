import React,{Component} from 'react'
import {connect} from 'react-redux'
import {postMessage} from '../store/actions/messages'

class MessageForm extends Component {
	state={
		message: ''
	}
	
	handleMessage = e => {
		e.preventDefault()
		this.props.postMessage(this.state.message)
		this.setState({message: ''})
		this.props.history.push('/')
		
	}
	
	render(){
		return(
			<form onSubmit={this.handleMessage} >
				{this.props.errors.message && (
					<div className='alert alert-danger'>{this.props.errors.message}</div>
				)}
				<label htmlFor='message'>New Message:</label>
				<input type='text' 
						className='form-control mt-2'
						name='message'
						value={this.state.message}	
						onChange={e => this.setState({message: e.target.value})}
					/>
				<button type='submit' className='btn btn-success pull-right mt-2'>Submit
				</button>
			</form>
		)
	}
}

function mapStateToProps(state){
	return {
		errors: state.errors
	}
}

export default connect(mapStateToProps, {postMessage})(MessageForm)