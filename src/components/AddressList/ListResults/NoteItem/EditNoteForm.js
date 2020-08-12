import React from 'react'
import {
	MdCancel,
	MdDeleteForever,
	MdCheckCircle,
} from 'react-icons/md'
/**
 * This component renders the edit note form
 * @param {string} content - from note
 * @callback handleEditNote - callback prop from useEditNoteControls
 * @callback handleClick -  callback prop from useEditNoteControls
 * @callback handleDeleteNote -  callback prop from useEditNoteControls
 * @param {object} history - render prop
 */
const EditNoteForm = ({
	handleEditNote,
	content,
	handleClick,
	history,
	handleDeleteNote,
}) => {
	return (
		<form
			data-testid='edit-note-form'
			className='edit__note__form'
			onSubmit={async (e) => {
				await handleEditNote(e)
				history.go()
			}}
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
					onClick={async () => {
						await handleDeleteNote()
						history.go()
					}}
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
	)
}

export default EditNoteForm
