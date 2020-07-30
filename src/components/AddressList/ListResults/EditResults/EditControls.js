import React from 'react'
import { useDeleteAddress } from '../../../../hooks/useDeleteAddress'

export const EditControls = ({
	history,
	addressId,
	handleSubmit,
}) => {
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
							type='button'
							onClick={() => setWillDelete(false)}
						>
							Cancel
						</button>
						<button
							className='main__cancel__button'
							type='button'
							onClick={handleDelete}
						>
							CONFIRM
						</button>
					</>
				) : (
					<button
						className='main__controls__button'
						type='button'
						onClick={() => setWillDelete(true)}
					>
						Delete
					</button>
				)}
				<button
					className='main__controls__button'
					type='button'
					onClick={() => history.goBack()}
				>
					Cancel
				</button>
				<button
					type='submit'
					className='main__controls__button'
				>
					Save
				</button>
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
