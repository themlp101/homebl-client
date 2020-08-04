import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ListResultsControls } from './ListResultsControls'

describe('<ListResultsControls />', () => {
	const props = {
		addresssId: 1,
		history: { push: () => {} },
		willDelete: false,
		setWillDelete: () => {
			props.willDelete = true
		},
		handleDelete: () => {},
		error: null,
	}

	it('should render without crashing ', () => {
		const { getByLabelText, getByTestId } = render(
			<MemoryRouter>
				<ListResultsControls {...props} />
			</MemoryRouter>
		)

		expect(getByTestId(/main-controls/)).toBeInTheDocument()
	})
	it('should render the right control layout on toggle', () => {
		const { getByLabelText } = render(
			<MemoryRouter>
				<ListResultsControls {...props} />
			</MemoryRouter>
		)
		fireEvent.click(getByLabelText(/Delete/))
		expect(getByLabelText(/Confirm Delete/)).toBeInTheDocument()
	})
})
