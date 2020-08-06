import React from 'react'
import useGetAddress from '../../../../hooks/useGetAddress'

import EditAddress from './EditAddress'
import { EditControls } from './EditControls'
import useEditAddress from '../../../../hooks/useEditAddress'
/**
 *
 * @param {object} history - render prop
 * @param {match} match - render prop - passed to useGetAddress
 */
const EditResults = ({ history, match }) => {
	const { address, addressError } = useGetAddress(match)
	const {
		updateAddress_1,
		updateCity,
		updateState,
		updateZipCode,
		handleSubmit,
	} = useEditAddress(history, match, address)
	return (
		<div className='list__results__container'>
			<form
				data-testid='edit-controls-form'
				onSubmit={(e) => handleSubmit(e)}
			>
				<EditControls
					history={history}
					addressId={match.params.addressId}
					error={addressError}
				/>
				{addressError ? (
					<p>{addressError}</p>
				) : (
					<EditAddress
						address={{ ...address }}
						updateAddress_1={updateAddress_1}
						updateCity={updateCity}
						updateState={updateState}
						updateZipCode={updateZipCode}
					/>
				)}
			</form>
		</div>
	)
}

export default EditResults
