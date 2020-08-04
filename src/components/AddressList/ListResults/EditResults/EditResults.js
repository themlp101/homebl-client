import React from 'react'
import useGetAddress from '../../../../hooks/useGetAddress'

import EditAddress from './EditAddress'
import { EditControls } from './EditControls'
import useEditAddress from '../../../../hooks/useEditAddress'

const EditResults = (props) => {
	const { address, addressError } = useGetAddress(props)
	const {
		updateAddress_1,
		updateCity,
		updateState,
		updateZipCode,
		handleSubmit,
	} = useEditAddress(props.history, props.match, address)
	return (
		<div className='list__results__container'>
			<form
				data-testid='edit-controls-form'
				onSubmit={(e) => handleSubmit(e)}
			>
				<EditControls
					history={props.history}
					addressId={props.match.params.addressId}
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
