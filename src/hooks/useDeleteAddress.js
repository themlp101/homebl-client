import { useState } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is a custom hook that handles the delete address utility
 * @param {object} history - render prop
 * @param {string} addressId - from url params
 */
export const useDeleteAddress = (history, addressId) => {
	const [willDelete, setWillDelete] = useState(false)
	const [error, setError] = useState(null)
	const handleDelete = async () => {
		try {
			await fetch(
				`${config.API_ENDPOINT}/address/${addressId}`,
				{
					method: 'DELETE',
					headers: {
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
				}
			)
			history.push('/address')
		} catch (error) {
			setError(error.message)
		}
	}
	return {
		willDelete,
		setWillDelete,
		error,
		setError,
		handleDelete,
	}
}
