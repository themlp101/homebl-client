import React from 'react'
import './AddAddress.css'
import AddAddressForm from './AddAddressForm/AddAddressForm'
/**
 * This component is a container that renders the address form
 * @param {object} history - render props
 */
const AddAddress = ({ history }) => {
	return (
		<div
			data-testid='add-address-container'
			className='form__container'
		>
			<AddAddressForm history={history} />
		</div>
	)
}

export default AddAddress
