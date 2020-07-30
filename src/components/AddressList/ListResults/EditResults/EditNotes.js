import React from 'react'

const EditNotes = ({ notes, notesError }) => {
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
							<p key={note.id}>{note.content}</p>
						))}
				</div>
			)}
		</>
	)
}
export default EditNotes
