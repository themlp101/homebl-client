import React from 'react'
import useAddNote from '../../../../hooks/useAddNote'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import './AddNoteForm.css'
/**
 * This component renders the AddNoteForm and displays errors if any
 *
 * @param {object} history - render prop
 * @param {object} match  - render prop
 * @param {boolean} isAddingNote - default 'false', based on user input
 *
 */
const AddNoteForm = ({
	history,
	match,
	toggleIsAddingNote,
	isAddingNote,
}) => {
	const { handleSubmit, addError } = useAddNote({ match, history })

	return (
		<form
			data-testid='add-note-form'
			name='add__note__form'
			className='add__note__form'
			onSubmit={async (event) => {
				await handleSubmit(event)
				toggleIsAddingNote(false)
			}}
		>
			{addError && <p style={{ color: 'red' }}>{addError}</p>}
			<textarea
				aria-label='Add Note Input'
				name='content'
				defaultValue=''
				className='add__note__input'
			/>
			<div className='add__note__btn__ctn'>
				<button
					className='save__note__btn'
					aria-label='Cancel'
					type='button'
					onClick={() => toggleIsAddingNote(!isAddingNote)}
				>
					<MdCancel className='add__note__icon' />
				</button>
				<button
					className='save__note__btn'
					aria-label='Save Note'
					type='submit'
				>
					<MdCheckCircle className='add__note__icon' />
				</button>
			</div>
		</form>
	)
}

export default AddNoteForm
