import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import { ListResultsControls } from './ListResultsControls'
import { AddressTitle } from './AddressTitle'
import { NotesResults } from './NotesResults'
import { MdAdd } from 'react-icons/md'
import './ListResults.css'
import useAddNote from '../../../hooks/useAddNote'
import AddNoteForm from './NoteItem/AddNoteForm'

/**
 *
 * @param {object} history -render prop
 * @param {object} match - render prop
 */
const ListResults = ({ history, match }) => {
	const { address, addressError } = useGetAddress(match)

	const { toggleIsAddingNote, isAddingNote } = useAddNote({
		match,
		history,
	})

	return (
		<div
			data-testid='list-results-container'
			className='list__results__container'
		>
			<ListResultsControls
				history={history}
				addressId={match.params.addressId}
			/>
			{addressError ? (
				<p>{addressError}</p>
			) : (
				<>
					<div>
						<AddressTitle address={{ ...address }} />
						<NotesResults
							history={history}
							match={match}
							isAddingNote={isAddingNote}
						/>
						{isAddingNote && (
							<AddNoteForm
								history={history}
								match={match}
								toggleIsAddingNote={
									toggleIsAddingNote
								}
								isAddingNote={isAddingNote}
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
