import React from 'react'
/**
 * This component renderes the address title
 * @param {object} address - {address_1, city, state, zip_code}
 */
export const AddressTitle = ({ address }) => {
	return <h2>{address.address_1 && address.address_1}</h2>
}
