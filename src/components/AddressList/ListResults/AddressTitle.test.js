import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AddressTitle } from './AddressTitle'

describe('<AddressTitle />', () => {
	const props = { address: { address_1: '123 Main Street' } }

	it('should render without crashing and the right header', () => {
		const { getByText } = render(
			<MemoryRouter>
				<AddressTitle {...props} />
			</MemoryRouter>
		)
		expect(getByText(props.address.address_1)).toBeInTheDocument()
	})
})
