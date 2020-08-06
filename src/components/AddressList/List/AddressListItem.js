import React from 'react'
import { NavLink } from 'react-router-dom'
/**
 * This component renders the address as a list item contained a NavLink
 * @param {object} address - { address_1, city, state, zip_code}
 */
const AddressListItem = (address) => {
	return (
		<li className='list__item'>
			<NavLink
				to={`/address/${address.id}`}
				className='item__link'
				activeClassName='selected'
			>
				{address.address_1}
			</NavLink>
		</li>
	)
}

export default AddressListItem
