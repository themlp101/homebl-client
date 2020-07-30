import React from 'react'
import useGetAddress from '../../../../hooks/useGetAddress'
import useGetNotes from '../../../../hooks/useGetNotes'
import EditAddress from './EditAddress'
import EditNotes from './EditNotes'
import { EditControls } from './EditControls'
import useEditAddress from '../../../../hooks/useEditAddress'

const EditResults = (props) => {
	const { address, error } = useGetAddress(props)
	const { notes, notesError } = useGetNotes(props)
	const {
		updateAddress_1,
		updateCity,
		updateState,
		updateZipCode,
	} = useEditAddress(props.history, address)
	return (
		<div className='list__results__container'>
			<EditControls
				history={props.history}
				addressId={props.match.params.addressId}
				error={error}
			/>
			{error ? (
				<p>{error}</p>
			) : (
				<div>
					<EditAddress
						address={{ ...address }}
						updateAddress_1={updateAddress_1}
						updateCity={updateCity}
						updateState={updateState}
						updateZipCode={updateZipCode}
					/>
					<EditNotes
						notesError={notesError}
						notes={notes}
					/>
				</div>
			)}
		</div>
	)
}

export default EditResults
