import React from 'react'
import { useDeleteAddress } from '../../../../hooks/useDeleteAddress'
import {
	MdCancel,
	MdDelete,
	MdDeleteForever,
	MdCheckCircle,
} from 'react-icons/md'
import './EditControls.css'
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
			<header className='edit__controls'>
				{willDelete ? (
					<>
						<button
							aria-label='Cancel Delete'
							className='edit__controls__button'
							type='button'
							onClick={() => setWillDelete(false)}
						>
							<MdCancel className='edit__address__icon' />
							<label className='edit__controls__button__label'>
								CANCEL
							</label>
						</button>
						<button
							aria-label='Confirm Delete'
							className='edit__cancel__button'
							type='button'
							onClick={handleDelete}
						>
							<MdDeleteForever className='edit__address__icon' />
							<label className='edit__controls__button__label'>
								CONFIRM
							</label>
						</button>
					</>
				) : (
					<button
						aria-label='Delete'
						className='edit__controls__button'
						type='button'
						onClick={() => setWillDelete(true)}
					>
						<MdDelete className='edit__address__icon' />
						<label className='edit__controls__button__label'>
							DELETE
						</label>
					</button>
				)}
				<button
					aria-label='Discard Changes'
					className='edit__controls__button'
					type='button'
					onClick={() => history.goBack()}
				>
					<MdCancel className='edit__address__icon' />
					<label className='edit__controls__button__label'>
						DISCARD CHANGES
					</label>
				</button>
				<button
					aria-label='Save Changes'
					type='submit'
					className='edit__controls__button'
				>
					<MdCheckCircle className='edit__address__icon' />
					<label className='edit__controls__button__label'>
						SAVE CHANGES
					</label>
				</button>
			</header>
			{error && <p>{error}</p>}
		</>
	)
}
