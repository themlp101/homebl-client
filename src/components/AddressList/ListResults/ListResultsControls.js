import React from 'react'
import { useDeleteAddress } from '../../../hooks/useDeleteAddress'
import {
	MdCancel,
	MdDelete,
	MdDeleteForever,
	MdEdit,
} from 'react-icons/md'
import './ListResultsControls.css'

export const ListResultsControls = ({ history, addressId }) => {
	const {
		willDelete,
		setWillDelete,
		error,
		handleDelete,
	} = useDeleteAddress(history, addressId)
	return (
		<>
			<header
				data-testid='main-controls'
				className='main__controls'
			>
				<button
					aria-label='Edit Note'
					className='main__controls__button'
					onClick={() =>
						history.push(`/address/${addressId}/edit`)
					}
				>
					<MdEdit
						className='main__controls__icon
					'
					/>
					<label className='main__controls__button__label'>
						EDIT ADDRESS
					</label>
				</button>
				{willDelete ? (
					<>
						<button
							aria-label='Cancel'
							className='main__controls__button'
							onClick={() => setWillDelete(false)}
						>
							<MdCancel
								className='main__controls__icon
							'
							/>
							<label className='main__controls__button__label'>
								CANCEL
							</label>
						</button>
						<button
							aria-label='Confirm Delete'
							className='main__cancel__button'
							onClick={handleDelete}
						>
							<MdDeleteForever
								className='main__controls__icon
							'
							/>
							<label className='main__controls__button__label'>
								CONFIRM
							</label>
						</button>
					</>
				) : (
					<button
						aria-label='Delete'
						className='main__controls__button'
						onClick={() => setWillDelete(true)}
					>
						<MdDelete
							className='main__controls__icon
						'
						/>
						<label className='main__controls__button__label'>
							DELETE
						</label>
					</button>
				)}
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
