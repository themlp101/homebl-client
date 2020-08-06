/* eslint-disable no-unused-vars */
import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is a  custom hook that handles the edit address utility
 * @param {object} history - render prop
 * @param {object} match - render prop
 * @param {object} address - address object that comes from state in the useGetAddress hook
 * {address_1, city, state, zip_code}
 */
const useEditAddress = (history, match, address) => {
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
			const { address_1, city, state, zip_code } = event.target
			const newFields = {
				address_1: address_1.value,
				city: city.value,
				state: state.value,
				zip_code: zip_code.value,
			}
			const { addressId } = match.params

			await fetch(
				`${config.API_ENDPOINT}/address/${addressId}`,
				{
					method: 'PATCH',
					headers: {
						'content-type': 'application/json',
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
					body: JSON.stringify(newFields),
				}
			)

			history.push(`/address/${addressId}`)
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
