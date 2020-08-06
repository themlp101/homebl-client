import { useState, useEffect } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is a custom hook that gets all the notes for the specific address
 * and sets the appropriate corresponding error if any --
 * adding mounted in state to test as a dependency in useEffect to avoid unnecessary renders
 * or to force a re-render
 *
 * @param {object} match - get url params
 * @param {boolean} isAddingNote - boolean expression representing user action
 */
const useGetNotes = (match, isAddingNote) => {
	const [notes, setNotes] = useState([])
	const [notesError, setNotesError] = useState(null)
	const { addressId } = match.params
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
		setMounted(true)

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

		mounted && getNotes()
		return () => {
			// cleanup
			setMounted(false)
		}
	}, [addressId, isAddingNote, mounted])

	return { notes, notesError }
}

export default useGetNotes
