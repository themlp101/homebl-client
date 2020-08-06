import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'

/**
 * Custom hook that controls the AddNoteForm
 * Controls form conditional display
 * Submits new note
 *
 * @param {object} match - render prop, params from url
 * @param {object} history - render prop, push
 * @callback toggleIsAddingNote - sets !isAddingNote state
 * @param {boolean} isAddingNote - default false, if true, display form
 * @callback setAddError - sets error state
 * @param {string} addError - error message from the api
 *
 */
const useAddAddress = (history) => {
	// on change store values in state
	const [address_1, setAddress_1] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zip_code, setZip_Code] = useState('')
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
			history.push(`/address/${data.id}`)
		} catch (error) {
			setError(error.message)
		}
	}
	return {
		handleSubmit,
		setAddress_1,
		setCity,
		setState,
		setZip_Code,
		error,
	}
}

export default useAddAddress
