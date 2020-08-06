import React, { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { LoggedInContext } from '../context/LoggedInContext'
import { useTokenService } from '../../services/token-services'
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
			<LoggedInContext.Provider
				value={{ isLogged, setIsLogged }}
			>
				<Header />
				<Main />
			</LoggedInContext.Provider>
		</div>
	)
}

export default App
