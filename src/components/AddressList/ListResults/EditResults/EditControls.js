import React from 'react'
import { useDeleteAddress } from '../../../../hooks/useDeleteAddress'

export const EditControls = ({ history, addressId }) => {
	const {
		willDelete,
		setWillDelete,
		error,
		handleDelete,
	} = useDeleteAddress(history, addressId)
	return (
		<>
			<header className='main__controls'>
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
				<button className='main__controls__button'>
					Save
				</button>
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
