import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EditResults from './EditResults'

describe('<EditResults />', () => {
	const props = {
		history: '/address/1',
		match: { params: 1 },
		error: null,
		address: {
			id: 1,
			address_1: '123 Main St',
			city: 'Denver',
			state: 'CO',
			zip_code: 80014,
		},
	}
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<EditResults {...props} />
			</MemoryRouter>
		)
		expect(getByTestId(/edit-controls-form/)).toBeInTheDocument()
	})
})
