import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ListContainer } from './ListContainer'

describe('<ListContainer />', () => {
	const props = {
		match: { params: { addressId: 1 } },
		history: { push: () => {} },
	}
	it('should render without crashing and the welcome message if no addresses', () => {
		const { getByText } = render(
			<MemoryRouter>
				<ListContainer {...props} />
			</MemoryRouter>
		)
		expect(getByText(/Welcome to Homebl!/)).toBeInTheDocument()
	})
})
