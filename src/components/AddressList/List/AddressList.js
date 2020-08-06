import React from 'react'
import { useGetAddresses } from '../../../hooks/useGetAddresses'
import './AddressList.css'
import AddressListItem from './AddressListItem'
/**
 * Renders the list of address, if any.
 *
 * @param {object} location - render prop, passed to useGetAddresses to use in useEffect
 */
const AddressList = ({ location }) => {
	const { addresses, error } = useGetAddresses(location)

	return (
		<ul className='house__list'>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{addresses &&
				addresses.map((address) => (
					<AddressListItem key={address.id} {...address} />
				))}

			{addresses.length === 0 && (
				<>
					<h2>Welcome to Homebl!</h2>
					<p>You should add your first address!</p>
				</>
			)}
		</ul>
	)
}

export default AddressList
