import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import useGetNotes from '../../../hooks/useGetNotes'
import { ListResultsControls } from './ListResultsControls'
import { AddressTitle } from './AddressTitle'
import { NotesResults } from './NotesResults'

import { MdAdd } from 'react-icons/md'
import './ListResults.css'
import useAddNote from '../../../hooks/useAddNote'
import AddNoteForm from './NoteItem/AddNoteForm'
const ListResults = (props) => {
	const { address, addressError } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)
	const { toggleIsAddingNote, isAddingNote } = useAddNote(props)

	return (
		<div className='list__results__container'>
			<ListResultsControls
				history={props.history}
				addressId={props.match.params.addressId}
			/>
			{addressError ? (
				<p>{addressError}</p>
			) : (
				<>
					<div>
						<AddressTitle address={{ ...address }} />
						<NotesResults
							notesError={notesError}
							notes={notes}
							address_id={address.id}
							{...props}
						/>
						{isAddingNote && (
							<AddNoteForm
								{...props}
								toggleIsAddingNote={
									toggleIsAddingNote
								}
							/>
						)}
					</div>
					<button
						aria-label='Add Note'
						className='add__note__btn'
						type='button'
						onClick={() => toggleIsAddingNote(true)}
					>
						<MdAdd className='md__icon add__icon' />
						<label>ADD NOTE</label>
					</button>
				</>
			)}
		</div>
	)
}

export default ListResults
