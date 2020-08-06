import config from '../config'
import { useState } from 'react'
/**
 * This is a custom hook that handles the log out utility
 * Removes the authToken from the browser
 * Updates logged in context
 * Redirects to the login page
 * @param {object} history - render prop
 * @callback setIsLogged - used to update is logged context
 */
export const useLogout = ({ history, setIsLogged }) => {
	const [error] = useState(null)
	const handleLogout = async (event) => {
		event.preventDefault()
		try {
			window.localStorage.removeItem(config.TOKEN_KEY)
			setIsLogged(false)
			history.push('/login')
		} catch (error) {
			console.error(error)
		}
	}

	return { handleLogout, error }
}
