import React from 'react'
import { render, screen, getAllByText } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RegisterForm from './RegisterForm'

describe.skip('<RegisterForm/>', () => {
	it('should render without crashing', () => {
		const { getByTestId, getByLabelText, getByText } = render(
			<MemoryRouter>
				<RegisterForm />
			</MemoryRouter>
		)

		expect(getByTestId(/register-form/)).toBeInTheDocument()
		expect(getByLabelText(/username/)).toBeInTheDocument()
		expect(getByLabelText(/password/)).toBeInTheDocument()
		expect(getByText(/REGISTER\/LOGIN/i)).toBeInTheDocument()
	})
})
