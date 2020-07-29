import React from 'react'
import { useListResultsControls } from '../../../hooks/useListResultsControls'

export const ListResultsControls = ({ history, addressId }) => {
	const {
		willDelete,
		setWillDelete,
		error,
		handleDelete,
	} = useListResultsControls(history, addressId)
	return (
		<>
			<header className='main__controls'>
				<button>Add to Tour</button>
				<button>Add to Favorites</button>
				<button>Edit</button>
				{willDelete ? (
					<>
						<button onClick={() => setWillDelete(false)}>
							Cancel
						</button>
						<button onClick={handleDelete}>
							CONFIRM
						</button>
					</>
				) : (
					<button onClick={() => setWillDelete(true)}>
						Delete
					</button>
				)}
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
