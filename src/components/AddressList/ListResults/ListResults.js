import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import useGetNotes from '../../../hooks/useGetNotes'
import { ListResultsControls } from './ListResultsControls'
import { AddressTitle } from './AddressTitle'
import { NotesResults } from './NotesResults'

const ListResults = (props) => {
	const { address, addressError } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)

	return (
		<div className='list__results__container'>
			<ListResultsControls
				history={props.history}
				addressId={props.match.params.addressId}
			/>
			{addressError ? (
				<p>{addressError}</p>
			) : (
				<div>
					<AddressTitle address={{ ...address }} />
					<NotesResults
						notesError={notesError}
						notes={notes}
						address_id={address.id}
					/>
				</div>
			)}
		</div>
	)
}

export default ListResults
