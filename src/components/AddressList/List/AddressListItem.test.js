import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddressListItem from './AddressListItem'

describe.only('<AddressListItem/>', () => {
	it('should render without crashing without any data', () => {
		const address = { id: 1, address_1: '123 Maint St' }
		const { getByText } = render(
			<MemoryRouter>
				<AddressListItem {...address} />
			</MemoryRouter>
		)
		expect(getByText(/123 Maint St/i)).toBeInTheDocument()
	})
})
