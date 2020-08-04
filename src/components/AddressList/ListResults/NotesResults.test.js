import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { NotesResults } from './NotesResults'

describe('<NotesResults />', () => {
	const props = {
		history: { push: () => {} },
		notes: [{ id: 1, content: 'this is test content' }],
		notesError: null,
	}
	it('should render without crashing and displays the note', () => {
		const { getByText } = render(
			<MemoryRouter>
				<NotesResults {...props} />
			</MemoryRouter>
		)
		expect(getByText(props.notes[0].content)).toBeInTheDocument()
	})
})
