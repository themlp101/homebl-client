import { useState } from 'react'

import config from '../config'
import { useTokenService } from '../services/token-services'

const useAddNote = (props) => {
	const [isAddingNote, toggleIsAddingNote] = useState(false)
	const [addError, setAddError] = useState(null)
	const { addressId } = props.match.params
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
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
			props.history.go()
			toggleIsAddingNote(false)
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
