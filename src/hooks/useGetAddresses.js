import { useState, useEffect } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'
/**
 * This is custom component that gets the address from the api
 * @param {object} location - render prop, if changes, then the useEffect hook will re-render
 * '/address/:addressId'
 */
export const useGetAddresses = (location) => {
	const [addresses, setAddresses] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		let mounted = true
		const getAddresses = async () => {
			try {
				const response = await fetch(
					`${config.API_ENDPOINT}/address`,
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

				mounted && setAddresses(data)
			} catch (error) {
				setError(error)
			}
		}

		getAddresses()
		return () => (mounted = false)
	}, [location])

	return { addresses, error }
}
