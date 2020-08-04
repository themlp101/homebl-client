import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EditAddress from './EditAddress'

describe('<EditAddress />', () => {
	it('should render without crashing', () => {
		const address = {
			id: 1,
			address_1: '123 Main St',
			city: 'Denver',
			state: 'CO',
			zip_code: 80014,
		}
		const updateAddress_1 = () => {}
		const updateCity = () => {}
		const updateState = () => {}
		const updateZipCode = () => {}

		const { getByTestId, getByLabelText } = render(
			<MemoryRouter>
				<EditAddress
					address={{ ...address }}
					updateAddress_1={updateAddress_1}
					updateCity={updateCity}
					updateState={updateState}
					updateZipCode={updateZipCode}
				/>
			</MemoryRouter>
		)
		expect(
			getByTestId(/edit-input-container/)
		).toBeInTheDocument()
		expect(getByLabelText(/add address/)).toBeInTheDocument()
		expect(getByLabelText(/add city/)).toBeInTheDocument()
		expect(getByLabelText(/add zip code/)).toBeInTheDocument()
	})
})
