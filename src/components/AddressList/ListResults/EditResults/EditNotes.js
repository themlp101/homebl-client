import React from 'react'
/**
 * This component renders the note text area for editing
 * @param {array} notes - an array of objects representing notes {content: 'string', id: number}
 * @param {string} notesError - error message from api
 */
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
							<textarea
								key={note.id}
								defaultValue={note.content}
								name='content'
							/>
						))}
				</div>
			)}
		</>
	)
}
export default EditNotes
