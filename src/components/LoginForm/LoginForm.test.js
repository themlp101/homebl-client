import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LoginForm from './LoginForm'

describe('<LoginForm />', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<LoginForm />
			</MemoryRouter>
		)
		expect(getByTestId(/login-form/i)).toBeInTheDocument()
	})
	it('should render the form inputs ', () => {
		const { getByLabelText, getByText } = render(
			<MemoryRouter>
				<LoginForm />
			</MemoryRouter>
		)
		const username = getByLabelText('username', {
			selector: 'input',
		})
		expect(username).toBeInTheDocument()
		const password = getByLabelText('password', {
			selector: 'input',
		})
		expect(password).toBeInTheDocument()
		const button = getByText(/login/i)
		expect(button).toBeInTheDocument()
	})
})
