import React from 'react'
import NoteItem from './NoteItem/NoteItem'

export const NotesResults = ({
	notes,
	notesError,
	address_id,
	history,
}) => {
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
