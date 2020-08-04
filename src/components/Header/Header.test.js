import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'
import { LoggedInContext } from '../context/LoggedInContext'

describe.skip('<Header />', () => {
	it('should render without crashing', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)
		expect(getByTestId('header-container')).toBeInTheDocument()
	})
	it('should render logged in controls if logged in ', () => {
		const isLogged = true
		const setIsLogged = () => {}
		const tree = (
			<MemoryRouter>
				<LoggedInContext.Provider
					value={{ isLogged, setIsLogged }}
				>
					<Header />
				</LoggedInContext.Provider>
			</MemoryRouter>
		)
		const { getByTestId } = render(tree)
		expect(getByTestId(/header-controls1/i)).toBeInTheDocument()
	})
})
