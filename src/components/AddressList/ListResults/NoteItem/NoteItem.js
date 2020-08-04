import React, { useState } from 'react'
import config from '../../../../config'
import { useTokenService } from '../../../../services/token-services'
import {
	MdCancel,
	MdDeleteForever,
	MdCheckCircle,
	MdEdit,
} from 'react-icons/md'
import './NoteItem.css'

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
		<div className='note__container'>
			{isEditing ? (
				<form
					className='edit__note__form'
					onSubmit={(e) => handleEditNote(e)}
				>
					<textarea
						type='text'
						name='content'
						defaultValue={content}
						className='edit__note__input'
					/>

					<div className='edit__btn__controls'>
						<button
							aria-label='Cancel Edit'
							className='edit__button cancel__button'
							type='button'
							onClick={handleClick}
						>
							<MdCancel className='md__icon ' />
						</button>
						<button
							aria-label='Delete'
							type='button'
							onClick={handleDeleteNote}
							className='edit__button delete__button'
						>
							<MdDeleteForever className='md__icon ' />
						</button>
						<button
							type='submit'
							className='edit__button save__btn'
							aria-label='Save'
						>
							<MdCheckCircle className='md__icon save__icon' />
						</button>
					</div>
				</form>
			) : (
				<>
					<h3>{content}</h3>
					<button
						className='edit__button edit__btn'
						onClick={handleClick}
						aria-label='Edit'
					>
						<MdEdit className='md__icon' />
					</button>
				</>
			)}
		</div>
	)
}

export default NoteItem
