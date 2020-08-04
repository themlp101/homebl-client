import React from 'react'
import { render } from '@testing-library/react'
import LogOutForm from './LogoutForm'
import { MemoryRouter } from 'react-router-dom'

describe.skip('<LogoutForm/>', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<LogOutForm />
			</MemoryRouter>
		)
		expect(getByTestId(/logout-form/)).toBeInTheDocument()
		expect(getByTestId(/logout-controls/)).toBeInTheDocument()
	})
})
