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
				<button className='main__controls__button'>
					Add to Tour
				</button>
				<button className='main__controls__button'>
					Add to Favorites
				</button>
				<button className='main__controls__button'>
					Edit
				</button>
				{willDelete ? (
					<>
						<button
							className='main__controls__button'
							onClick={() => setWillDelete(false)}
						>
							Cancel
						</button>
						<button
							className='main__cancel__button'
							onClick={handleDelete}
						>
							CONFIRM
						</button>
					</>
				) : (
					<button
						className='main__controls__button'
						onClick={() => setWillDelete(true)}
					>
						Delete
					</button>
				)}
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
