import React from 'react'
import { useDeleteAddress } from '../../../hooks/useDeleteAddress'

export const ListResultsControls = ({ history, addressId }) => {
	const {
		willDelete,
		setWillDelete,
		error,
		handleDelete,
	} = useDeleteAddress(history, addressId)
	return (
		<>
			<header className='main__controls'>
				<button
					className='main__controls__button'
					onClick={() =>
						history.push(`/address/${addressId}/edit`)
					}
				>
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
