import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'

export const useLogin = ({ history, setIsLogged }) => {
	const [user_name, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)

	const handleChange = (event) => {
		event.target.name === 'password'
			? setPassword(event.target.value)
			: setUsername(event.target.value)
	}
	const handleSubmit = async (event) => {
		try {
			event.preventDefault()
			setError(null)

			const res = await fetch(
				`${config.API_ENDPOINT}/auth/login`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify({ user_name, password }),
				}
			)
			const data = await res.json()
			if (data.error) throw data.error

			setUsername('')
			setPassword('')
			const { saveAuthToken } = useTokenService
			saveAuthToken(data.authToken)
			setIsLogged(true)
			history.push('/address')
			return () => {}
		} catch (error) {
			setError(error)
		}
	}

	return {
		user_name,
		password,
		error,
		handleChange,
		handleSubmit,
	}
}

// 	fetch(`${config.API_ENDPOINT}/auth/login`, {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/json',
// 		},
// 		body: JSON.stringify({ user_name, password }),
// 	})
// 		.then((res) =>
// 			!res.ok
// 				? res.json().then((e) => Promise.reject(e))
// 				: res.json()
// 		)
// 		.then((res) => {
// 			setUsername('')
// 			setPassword('')
// 			window.localStorage.setItem(
// 				config.TOKEN_KEY,
// 				res.authToken
// 			)
// 			setLoggedIn(true)
// 		})
// }
