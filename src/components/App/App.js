import React, { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { LoggedInContext } from '../context/LoggedInContext'
import { useTokenService } from '../../services/token-services'
import { Route, Switch } from 'react-router-dom'
import Demo from './Demo'
/**
 * This is the main app container component that renders the header and main body
 * Provides logged in context
 */
function App() {
	const [isLogged, setIsLogged] = useState(
		useTokenService.hasAuthToken()
	)

	return (
		<div data-testid='app-div'>
			<Switch>
				<Route
					path='/demo'
					render={(props) => <Demo {...props} />}
				/>
				<LoggedInContext.Provider
					value={{ isLogged, setIsLogged }}
				>
					<Header />
					<Main />
				</LoggedInContext.Provider>
			</Switch>
		</div>
	)
}

export default App
