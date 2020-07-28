import { useState } from 'react'
import config from '../config'

export const useLogin = () => {
	const [user_name, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loggedIn, setLoggedIn] = useState(false)
	const [error, setError] = useState(null)

	const handleChange = (event) => {
		event.target.name === 'password'
			? setPassword(event.target.value)
			: setUsername(event.target.value)
		console.log(user_name, password)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		setError(null)
		const res = fetch(`${config.API_ENDPOINT}/auth/login`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ user_name, password }),
		})
			.then((res) =>
				!res.ok
					? res.json().then((e) => Promise.reject(e))
					: res.json()
			)
			.then((res) => {
				setUsername('')
				setPassword('')
				window.localStorage.setItem(
					config.TOKEN_KEY,
					res.authToken
				)
				setLoggedIn(true)
			})
	}

	return {
		user_name,
		password,
		error,
		handleChange,
		handleSubmit,
		loggedIn,
	}
}
