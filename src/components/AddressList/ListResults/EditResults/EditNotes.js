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
