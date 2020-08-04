import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NoteItem from './NoteItem'

describe('<NoteItem />', () => {
	const props = {
		history: { go: () => {} },
		content: 'this is test content',
		id: 1,
		isEditing: false,
		handleClick: () => {
			props.isEditing = !props.isEditing
		},
		setIsEditing: () => {
			props.isEditing = true
		},
		handleEditNote: () => {},
	}
	it('should render without crashing', () => {
		const { getByLabelText, getByText } = render(
			<MemoryRouter>
				<NoteItem {...props} />
			</MemoryRouter>
		)
		expect(getByLabelText(/edit/i)).toBeInTheDocument()
		expect(getByText(props.content)).toBeInTheDocument()
	})
	it('should render edit form when toggled', () => {
		const { getByLabelText, getByTestId } = render(
			<MemoryRouter>
				<NoteItem {...props} />
			</MemoryRouter>
		)
		fireEvent.click(getByLabelText(/Edit/i))
		expect(getByTestId(/edit-note-form/i)).toBeInTheDocument()
		expect(getByLabelText(/Cancel Edit/i)).toBeInTheDocument()
		expect(getByLabelText(/Save/i)).toBeInTheDocument()
	})
})
