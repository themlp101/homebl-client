import React from 'react'
import './AddAddress.css'
import AddAddressForm from './AddAddressForm/AddAddressForm'

const AddAddress = (props) => {
	return (
		<div
			data-testid='add-address-container'
			className='form__container'
		>
			<AddAddressForm {...props} />
		</div>
	)
}

export default AddAddress
