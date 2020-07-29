import React from 'react'
import { useGetAddresses } from '../../../hooks/useGetAddresses'
import './AddressList.css'
import { NavLink } from 'react-router-dom'

const AddressList = () => {
	const { addresses, error } = useGetAddresses()
	return (
		<ul className='house__list'>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{addresses &&
				addresses.map((address) => (
					<li key={address.id} className='list__item'>
						<NavLink
							to={`/address/${address.id}`}
							className='item__link'
							activeClassName='selected'
						>
							{address.address_1}
						</NavLink>
					</li>
				))}
		</ul>
	)
}

export default AddressList
