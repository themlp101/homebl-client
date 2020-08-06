import React from 'react'
import { MdEdit } from 'react-icons/md'
import './NoteItem.css'
import useEditNoteControls from '../../../../hooks/useEditNoteControls'
import EditNoteForm from './EditNoteForm'
/**
 * This component renders the note item, or conditionally, the edit note form
 * @param {string} content - used as defaultValue for textarea field, from the note
 */
const NoteItem = ({ content, id, history }) => {
	const {
		isEditing,
		handleClick,
		handleDeleteNote,
		handleEditNote,
	} = useEditNoteControls(id)

	return (
		<div className='note__container'>
			{isEditing ? (
				<EditNoteForm
					handleEditNote={handleEditNote}
					content={content}
					handleClick={handleClick}
					history={history}
					handleDeleteNote={handleDeleteNote}
				/>
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
