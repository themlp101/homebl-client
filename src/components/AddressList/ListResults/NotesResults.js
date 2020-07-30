import React from 'react'

export const NotesResults = ({ notes, notesError, address_id }) => {
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
							<p
								key={note.id}
								note_id={note.id}
								address_id={address_id}
							>
								{note.content}
							</p>
						))}
				</div>
			)}
		</>
	)
}
