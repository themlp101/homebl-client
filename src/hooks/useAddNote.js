import { useState } from 'react'

import config from '../config'
import { useTokenService } from '../services/token-services'

/**
 * Custom hook that controls the AddNoteForm
 * Controls form conditional display
 * Submits new note
 *
 * @param {object} match - render prop, params from url
 * @callback toggleIsAddingNote - sets !isAddingNote state
 * @param {boolean} isAddingNote - default false, if true, display form
 * @callback setAddError - sets error state
 * @param {string} addError - error message from the api
 *
 */
const useAddNote = ({ match }) => {
	const [isAddingNote, toggleIsAddingNote] = useState(false)
	const [addError, setAddError] = useState(null)
	const { addressId } = match.params

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			/**
			 * @param {string} value - user input from form
			 */
			const { value } = event.target.content
			const newNote = {
				content: value,
			}

			const response = await fetch(
				`${config.API_ENDPOINT}/address/${addressId}/notes`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
					body: JSON.stringify(newNote),
				}
			)

			const data = await response.json()
			if (data.error) throw data.error
		} catch (error) {
			setAddError(error.message)
		}
	}

	return {
		isAddingNote,
		addError,
		handleSubmit,
		toggleIsAddingNote,
	}
}

export default useAddNote
