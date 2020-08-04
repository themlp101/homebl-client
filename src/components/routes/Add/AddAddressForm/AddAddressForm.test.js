import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddAddressForm from './AddAddressForm'

describe.skip('<AddAddressForm/>', () => {
	it('should render without crashing', () => {
		const { getByLabelText, getByText } = render(
			<MemoryRouter>
				<AddAddressForm />
			</MemoryRouter>
		)

		expect(getByLabelText(/add address/i)).toBeInTheDocument()
		expect(getByLabelText(/add city/i)).toBeInTheDocument()
		expect(getByLabelText(/add state/i)).toBeInTheDocument()
		expect(getByLabelText(/add zip code/i)).toBeInTheDocument()
		expect(getByText(/save/i)).toBeInTheDocument()
	})
})
