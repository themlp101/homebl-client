import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'

const useEditAddress = ({ history }, address) => {
	// on change store values in state
	const [address_1, updateAddress_1] = useState(address.address_1)
	const [city, updateCity] = useState(address.city)
	const [state, updateState] = useState(address.state)
	const [zip_code, updateZipCode] = useState(address.zip_code)
	const [error, setError] = useState(null)

	// on submit post to api
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const newAddress = {
				address_1,
				city,
				state,
				zip_code: parseInt(zip_code),
			}
			const response = await fetch(
				`${config.API_ENDPOINT}/address`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
					body: JSON.stringify(newAddress),
				}
			)
			const data = await response.json()
			console.log(data)
			history.push('/address')
		} catch (error) {
			setError(error.message)
		}
	}
	return {
		handleSubmit,
		updateAddress_1,
		updateCity,
		updateState,
		updateZipCode,
		error,
	}
}

export default useEditAddress
