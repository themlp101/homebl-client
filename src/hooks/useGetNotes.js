import { useState, useEffect } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'

const useGetNotes = (props) => {
	const [notes, setNotes] = useState([])
	const [notesError, setNotesError] = useState(null)
	const { addressId } = props.match.params

	useEffect(() => {
		let mounted = true

		const getNotes = async () => {
			try {
				const response = await fetch(
					`${config.API_ENDPOINT}/address/${addressId}/notes`,
					{
						method: 'GET',
						headers: {
							'content-type': 'application/json',
							authorization: `bearer ${useTokenService.getAuthToken()}`,
						},
					}
				)
				const data = await response.json()
				if (data.error) throw data.error

				mounted && setNotes(data)
			} catch (error) {
				setNotesError(error)
			}
		}

		getNotes()
		return () => {
			// cleanup
			mounted = false
		}
	}, [addressId])

	return { notes, notesError }
}

export default useGetNotes
