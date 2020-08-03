import React from 'react'
import { useDeleteAddress } from '../../../hooks/useDeleteAddress'
import {
	MdCancel,
	MdDeleteForever,
	MdCheckCircle,
	MdEdit,
} from 'react-icons/md'
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
					aria-label='Edit Note'
					className='main__controls__button'
					onClick={() =>
						history.push(`/address/${addressId}/edit`)
					}
				>
					<MdEdit className='md__icon larger' />
					<label>EDIT NOTE</label>
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
