import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import useGetNotes from '../../../hooks/useGetNotes'

const ListResults = (props) => {
	const { address, error } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)

	return (
		<div className='list__results__container'>
			<header className='main__controls'>
				<button>Add to Tour</button>
				<button>Add to Favorites</button>
				<button>Edit</button>
				<button>Delete</button>
			</header>
			{error ? (
				<p>{error}</p>
			) : (
				<div>
					<h2>{address && address.address_1}</h2>
					{notesError ? (
						<div className='main__notes'>
							<p>{notesError}</p>
						</div>
					) : (
						<div className='main__notes'>
							{notes &&
								notes.map((note) => (
									<p key={note.id}>
										{note.content}
									</p>
								))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default ListResults
