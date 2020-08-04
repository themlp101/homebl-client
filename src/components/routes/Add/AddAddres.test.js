import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddAddress from './AddAddress'

describe.skip('<AddAddress/>', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<AddAddress />
			</MemoryRouter>
		)
		expect(
			getByTestId(/add-address-container/i)
		).toBeInTheDocument()
	})
})
