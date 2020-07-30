import React, { useState } from 'react'
import config from '../../../../config'
import { useTokenService } from '../../../../services/token-services'

const NoteItem = ({ content, id, history, address_id }) => {
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
			setIsEditing(false)
			history.go()
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
			history.go()
		} catch (error) {
			console.error(error.message)
		}
	}

	return (
		<>
			{isEditing ? (
				<form onSubmit={(e) => handleEditNote(e)}>
					<input
						type='text'
						name='content'
						defaultValue={content}
					/>
					<button type='button' onClick={handleClick}>
						CANCEL
					</button>
					<button type='button' onClick={handleDeleteNote}>
						DELETE
					</button>
					<button type='submit'>SAVE</button>
				</form>
			) : (
				<>
					<p>{content}</p>
					<button onClick={handleClick}>EDIT NOTE</button>
				</>
			)}
		</>
	)
}

export default NoteItem
