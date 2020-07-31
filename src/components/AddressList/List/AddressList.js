import React from 'react'
import { useGetAddresses } from '../../../hooks/useGetAddresses'
import './AddressList.css'
import AddressListItem from './AddressListItem'

const AddressList = (props) => {
	const { addresses, error } = useGetAddresses(props)

	return (
		<ul className='house__list'>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{addresses &&
				addresses.map((address) => (
					<AddressListItem {...address} />
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
