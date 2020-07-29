import { useState, useEffect } from 'react'
import config from '../config'
import { useTokenService } from '../services/token-services'

export const useGetAddresses = () => {
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
	}, [])

	return { addresses, error }
}
