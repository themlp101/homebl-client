import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'
import useGetNotes from '../../../hooks/useGetNotes'
import { ListResultsControls } from './ListResultsControls'
import { AddressTitle } from './AddressTitle'
import { NotesResults } from './NotesResults'

const ListResults = (props) => {
	const { address, error } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)

	return (
		<div className='list__results__container'>
			<ListResultsControls
				history={props.history}
				addressId={props.match.params.addressId}
			/>
			{error ? (
				<p>{error}</p>
			) : (
				<div>
					<AddressTitle address={{ ...address }} />
					<NotesResults
						notesError={notesError}
						notes={notes}
					/>
				</div>
			)}
		</div>
	)
}

export default ListResults
