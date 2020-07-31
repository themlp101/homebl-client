import React from 'react'
import { NavLink } from 'react-router-dom'

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
