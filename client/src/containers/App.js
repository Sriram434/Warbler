import React from 'react'
import {Provider} from 'react-redux';
import {configureStore} from '../store'
import {BrowserRouter as Router} from 'react-router-dom' 
import Navbar from './Navbar'
import Main from './Main'
import {setAuthorizationToken, setCurrentUser} from '../store/actions/auth'
import jwtDecode from 'jwt-decode'

const store = configureStore()

//To check if token is present when the page refreshes
if(localStorage.jwtToken){
	setAuthorizationToken(localStorage.jwtToken)
	// Preventing manually tampering with the ket of jwtToken in localStorage
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
	} catch(e) {
		//Logging out the user if invalid token
		store.dispatch(setCurrentUser({}))
	}
}

const App = () =>(
	<Provider store={store}>
		<Router>
			<div className='onboarding'>
				<Navbar/>
				<Main />
			</div>
		</Router>
	</Provider>
)

export default App;
