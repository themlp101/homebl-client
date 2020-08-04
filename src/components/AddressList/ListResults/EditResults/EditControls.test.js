import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { EditControls } from './EditControls'

describe('<EditControls />', () => {
	const props = {
		willDelete: false,
		setWillDelete: () => {
			props.willDelete = true
		},
		error: null,
		handleDelete: () => {},
	}
	it('should render without crashing', () => {
		const { getByLabelText } = render(
			<MemoryRouter>
				<EditControls {...props} />
			</MemoryRouter>
		)
		expect(getByLabelText(/Delete/)).toBeInTheDocument()
		expect(getByLabelText(/Discard Changes/)).toBeInTheDocument()
	})
	it('should change control layout if deleting ', () => {
		const { getByLabelText } = render(
			<MemoryRouter>
				<EditControls {...props} />
			</MemoryRouter>
		)
		fireEvent.click(getByLabelText(/Delete/i))

		expect(getByLabelText(/Cancel Delete/)).toBeInTheDocument()
		expect(getByLabelText(/Confirm Delete/)).toBeInTheDocument()
	})
})
