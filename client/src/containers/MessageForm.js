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
		console.log(this.state.message)
		
	}
	
	render(){
		// const {message} = this.state
		return(
			<form onSubmit={this.handleMessage}>
				{this.props.errors.message && (
					<div className='alert alert-danger'>{this.props.errors.message}</div>
				)}
				<input type='text' 
						className='form-control'
						value={this.state.message}	
						onChange={e => this.setState({message: e.target.value})}
					/>
				<button type='submit' className='btn btn-success pull-right'>Submit
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