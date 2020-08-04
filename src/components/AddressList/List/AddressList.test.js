import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddressList from './AddressList'

describe('<AddressList/>', () => {
	it('should render without crashing without any data', () => {
		const { getByText } = render(
			<MemoryRouter>
				<AddressList />
			</MemoryRouter>
		)

		expect(getByText(/Welcome to Homebl!/i)).toBeInTheDocument()
	})
})
