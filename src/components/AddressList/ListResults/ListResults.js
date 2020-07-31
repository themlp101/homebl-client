import React, { useState } from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import useGetNotes from '../../../hooks/useGetNotes'
import { ListResultsControls } from './ListResultsControls'
import { AddressTitle } from './AddressTitle'
import { NotesResults } from './NotesResults'
import config from '../../../config'
import { useTokenService } from '../../../services/token-services'

const ListResults = (props) => {
	const { address, addressError } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)

	const [isAddingNote, toggleIsAddingNote] = useState(false)
	const [addError, setAddError] = useState(null)
	const { addressId } = props.match.params
	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const { value } = event.target.content
			const newNote = {
				content: value,
			}

			const response = await fetch(
				`${config.API_ENDPOINT}/address/${addressId}/notes`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
					body: JSON.stringify(newNote),
				}
			)

			const data = await response.json()
			if (data.error) throw data.error
			notes.push(data)

			toggleIsAddingNote(false)
		} catch (error) {
			setAddError(error.message)
		}
	}

	return (
		<div className='list__results__container'>
			<ListResultsControls
				history={props.history}
				addressId={props.match.params.addressId}
			/>
			{addressError ? (
				<p>{addressError}</p>
			) : (
				<>
					<div>
						<AddressTitle address={{ ...address }} />
						<NotesResults
							notesError={notesError}
							notes={notes}
							address_id={address.id}
							{...props}
						/>
						{isAddingNote && (
							<form
								name='addNoteForm'
								onSubmit={handleSubmit}
							>
								{addError && (
									<p style={{ color: 'red' }}>
										{addError}
									</p>
								)}
								<input
									aria-label='add note'
									name='content'
									defaultValue=''
								/>
								<button
									type='button'
									onClick={() =>
										toggleIsAddingNote(false)
									}
								>
									CANCEL
								</button>
								<button>SAVE</button>
							</form>
						)}
					</div>
					<button
						type='button'
						onClick={() => toggleIsAddingNote(true)}
					>
						ADD NOTE
					</button>
				</>
			)}
		</div>
	)
}

export default ListResults
