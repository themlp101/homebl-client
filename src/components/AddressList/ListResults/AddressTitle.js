import React from 'react'

export const AddressTitle = ({ address }) => {
	return <h2>{address.address_1 && address.address_1}</h2>
}
