import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Main from './Main'
import { LoggedInContext } from '../context/LoggedInContext'

describe('<Main/>', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<LoggedInContext.Provider
					value={{ isLogged: true, setIsLogged: () => {} }}
				>
					<Main />
				</LoggedInContext.Provider>
			</MemoryRouter>
		)

		expect(getByTestId(/main-container/)).toBeInTheDocument()
	})
	it('should render the login page if not logged in', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<LoggedInContext.Provider
					value={{ isLogged: false, setIsLogged: () => {} }}
				>
					<Main />
				</LoggedInContext.Provider>
			</MemoryRouter>
		)

		expect(getByTestId(/login-form/)).toBeInTheDocument()
	})
})
