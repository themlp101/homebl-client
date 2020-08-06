import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is a custom hook that handles the the controlled note form
 * handles editing, deleting and event listening
 *
 * @param {string} id - note id
 */
const useEditNoteControls = (id) => {
	const [isEditing, setIsEditing] = useState(false)

	const handleClick = () => {
		setIsEditing(!isEditing)
	}
	const handleEditNote = async (e) => {
		e.preventDefault()
		try {
			const { content } = e.target
			const newField = { content: content.value }

			await fetch(`${config.API_ENDPOINT}/notes/${id}`, {
				method: 'PATCH',
				headers: {
					'content-type': 'application/json',
					authorization: `bearer ${useTokenService.getAuthToken()}`,
				},
				body: JSON.stringify(newField),
			})
		} catch (error) {
			console.error(error.message)
		}
	}
	const handleDeleteNote = async () => {
		try {
			await fetch(`${config.API_ENDPOINT}/notes/${id}`, {
				method: 'DELETE',
				headers: {
					'content-type': 'application/json',
					authorization: `bearer ${useTokenService.getAuthToken()}`,
				},
			})
		} catch (error) {
			console.error(error.message)
		}
	}
	return {
		isEditing,
		handleClick,
		handleDeleteNote,
		handleEditNote,
	}
}

export default useEditNoteControls
