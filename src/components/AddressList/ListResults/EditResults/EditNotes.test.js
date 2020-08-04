import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EditNotes from './EditNotes'

describe('<EditNotes />', () => {
	const props = {
		notes: [
			{ id: 1, content: 'this is a test note' },
			{ id: 2, content: 'this is another test note' },
		],
	}
	it('should render without crashing with correct props', () => {
		const { getByText } = render(
			<MemoryRouter>
				<EditNotes {...props} />
			</MemoryRouter>
		)
		expect(getByText(props.notes[0].content)).toBeInTheDocument()
	})
})
