import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

test('renders learn react link', () => {
	const { getByTestId } = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	)
	expect(getByTestId('app-div')).toBeInTheDocument()
})
