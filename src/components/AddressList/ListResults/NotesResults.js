import React from 'react'
import NoteItem from './NoteItem/NoteItem'
import './NotesResults.css'
import useGetNotes from '../../../hooks/useGetNotes'
/**
 * This component renders the NoteItem and uses useGetNotes as a custom hook
 * @param {object} match - get url params
 * @param {object} history - render prop, use push
 */
export const NotesResults = ({ match, history, isAddingNote }) => {
	const { notes, notesError } = useGetNotes(match, isAddingNote)
	return (
		<>
			{notesError ? (
				<div className='main__notes'>
					<p>{notesError}</p>
				</div>
			) : (
				<div className='main__notes'>
					{notes &&
						notes.map((note) => (
							<NoteItem
								key={note.id}
								{...note}
								history={history}
							/>
						))}
				</div>
			)}
		</>
	)
}
