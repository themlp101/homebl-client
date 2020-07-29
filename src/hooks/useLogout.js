import config from '../config'
import { useState } from 'react'

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
