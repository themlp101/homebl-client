import { useEffect, useState } from 'react'

import { useTokenService } from '../services/token-services'
import config from '../config'
/**
 * This is acustom hook that gets the address from the api by matching params
 * and catches an error, if any
 * @param {object} match - get url params
 *
 */
const useGetAddress = (match) => {
	const [address, setAddress] = useState({})
	const [addressError, setError] = useState(null)
	const { addressId } = match.params

	useEffect(() => {
		let mounted = true
		const getAddress = async () => {
			try {
				const response = await fetch(
					`${config.API_ENDPOINT}/address/${addressId}`,
					{
						headers: {
							authorization: `bearer ${useTokenService.getAuthToken()}`,
						},
					}
				)
				const data = await response.json()
				if (data.error) throw data.error

				mounted && setAddress(data)
			} catch (error) {
				setError(error)
			}
		}

		getAddress()
		return () => (mounted = false)
	}, [addressId])
	return { address, addressError }
}

export default useGetAddress
