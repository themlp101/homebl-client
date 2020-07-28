import React, { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import { LoggedInContext } from '../context/LoggedInContext'

function App() {
	const [loggedIn, setLoggedIn] = useState(false)
	return (
		<div>
			<LoggedInContext.Provider
				value={{ loggedIn, setLoggedIn }}
			>
				<Header />
				<Main />
			</LoggedInContext.Provider>
		</div>
	)
}

export default App
