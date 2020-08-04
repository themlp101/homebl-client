import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import AddNoteForm from './AddNoteForm'

describe('<AddNoteForm />', () => {
	const props = {
		match: { params: 1 },
		handleSubmit: () => {},
		addError: () => {},
	}
	it('should render without crashing', () => {
		const { getByLabelText } = render(
			<MemoryRouter>
				<AddNoteForm {...props} />
			</MemoryRouter>
		)
		expect(getByLabelText(/Add Note Input/)).toBeInTheDocument()
		expect(getByLabelText(/Cancel/)).toBeInTheDocument()
		expect(getByLabelText(/Save Note/)).toBeInTheDocument()
	})
})
