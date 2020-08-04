import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ListResults from './ListResults'

describe('<ListResults />', () => {
	const props = {
		address: {
			address_1: '123 Main Street',
			city: 'Denver',
			state: 'CO',
			zip_code: 80014,
		},
		match: { params: { addressId: 1 } },
		notes: [{ id: 1, content: 'this is test content' }],
		toggleIsAddingNote: () => {
			props.isAddingNote = true
		},
		isAddingNote: false,
	}

	it('should render without crashing and the right header', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<ListResults {...props}></ListResults>
			</MemoryRouter>
		)
		expect(
			getByTestId(/list-results-container/)
		).toBeInTheDocument()
	})
	it('should render AddNoteForm on toggle', () => {
		const { getByTestId, getByLabelText } = render(
			<MemoryRouter>
				<ListResults {...props} />
			</MemoryRouter>
		)
		fireEvent.click(getByLabelText(/add note/i))
		expect(getByTestId(/add-note-form/)).toBeInTheDocument()
	})
})
