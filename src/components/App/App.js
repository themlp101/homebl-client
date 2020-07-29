import React from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { LoggedInContext } from '../context/LoggedInContext'
import { useTokenService } from '../../services/token-services'

function App() {
	return (
		<div>
			<LoggedInContext.Provider
				value={useTokenService.hasAuthToken()}
			>
				<Header />
				<Main />
			</LoggedInContext.Provider>
		</div>
	)
}

export default App
