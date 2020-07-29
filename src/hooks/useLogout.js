import config from '../config'
import { useState } from 'react'

export const useLogout = () => {
	const [error] = useState(null)
	const handleLogout = () => {
		try {
			window.localStorage.removeItem(config.TOKEN_KEY)
		} catch (error) {
			console.error(error)
		}
	}

	return { handleLogout, error }
}
