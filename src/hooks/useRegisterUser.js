import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is a custom component that handles the registration utility
 * Verifies password, if match continue, else display error
 * POSTS new user to the server from controlled form
 * Clears form
 * GETS authToken from the server and saves to the browser
 * Redirects to the address page
 *
 * @param {object} history - render prop
 * @callback setIsLogged - updates the logged in context
 */
const useRegisterUser = ({ history, setIsLogged }) => {
	const [user_name, setUsername] = useState('')
	const [full_name, setFullName] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')
	const [error, setError] = useState(null)

	const verifyPassword = () => {
		if (password !== password2) return `Passwords do not match`
	}
	const handleRegister = async (e) => {
		e.preventDefault()

		try {
			const newUser = {
				user_name,
				password,
				full_name,
			}
			verifyPassword()
			if (verifyPassword()) throw verifyPassword()

			const response = await fetch(
				`${config.API_ENDPOINT}/users`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(newUser),
				}
			)
			const user = await response.json()
			if (user.error) throw user.error

			const tokenResponse = await fetch(
				`${config.API_ENDPOINT}/auth/login`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({ user_name, password }),
				}
			)
			const data = await tokenResponse.json()
			if (data.error) throw data.error

			setUsername('')
			setPassword('')
			setPassword2('')
			setFullName('')
			const { saveAuthToken } = useTokenService
			saveAuthToken(data.authToken)
			setIsLogged(true)
			history.push('/address')
		} catch (error) {
			setError(error)
		}
	}
	return {
		handleRegister,
		user_name,
		password,
		full_name,
		password2,
		setUsername,
		setFullName,
		setPassword,
		setPassword2,
		error,
	}
}

export default useRegisterUser
