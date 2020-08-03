import React from 'react'
import useAddNote from '../../../../hooks/useAddNote'
import { MdCancel, MdCheckCircle } from 'react-icons/md'
import './AddNoteForm.css'
const AddNoteForm = (props) => {
	const { handleSubmit, addError } = useAddNote(props)

	return (
		<form
			name='add__note__form'
			className='add__note__form'
			onSubmit={handleSubmit}
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
					onClick={() => props.toggleIsAddingNote(false)}
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
