import React, { useState } from 'react'
import config from '../../../../config'
import { useTokenService } from '../../../../services/token-services'

const AddAddressForm = ({ history }) => {
	// on change store values in state
	const [address_1, setAddress_1] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	const [zip_code, setZip_Code] = useState('')
	const [error, setError] = useState(null)

	// on submit post to api

	const handleSubmit = async (event) => {
		event.preventDefault()
		try {
			const newAddress = {
				address_1,
				city,
				state,
				zip_code: parseInt(zip_code),
			}
			const response = await fetch(
				`${config.API_ENDPOINT}/address`,
				{
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `bearer ${useTokenService.getAuthToken()}`,
					},
					body: JSON.stringify(newAddress),
				}
			)
			const data = await response.json()
			history.push('/address')
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<form className='add__form'>
			<div className='input__container'>
				{error && <p>{error}</p>}
				<label htmlFor='address_1'>Address</label>
				<input
					className='input'
					aria-label='add address'
					type='text'
					name='address_1'
					value={address_1}
					required
					onChange={(e) => setAddress_1(e.target.value)}
				/>
			</div>
			<div className='input__container'>
				<label htmlFor='city'>City</label>
				<input
					className='input'
					aria-label='add city'
					type='text'
					name='city'
					value={city}
					required
					onChange={(e) => setCity(e.target.value)}
				/>
			</div>
			<div className='input__container'>
				<label htmlFor='state'>State</label>
				<input
					className='input'
					aria-label='add state'
					type='text'
					name='state'
					value={state}
					maxLength='2'
					required
					onChange={(e) => setState(e.target.value)}
				/>
			</div>
			<div className='input__container'>
				<label htmlFor='zip_code'>Zip Code</label>
				<input
					className='input'
					aria-label='add zip code'
					type='text'
					name='zip_code'
					value={zip_code}
					minLength='5'
					maxLength='5'
					required
					onChange={(e) => setZip_Code(e.target.value)}
				/>
			</div>
			<div className='input__container'>
				<label htmlFor='content'>Add Note</label>
				<textarea
					aria-label='add note'
					type='text'
					name='content'
					maxLength='2'
					defaultValue=''
				></textarea>
			</div>
			<header className='add__controls'>
				<button onClick={() => history.goBack()}>
					CANCEL
				</button>
				<button type='submit' onClick={handleSubmit}>
					SAVE
				</button>
			</header>
		</form>
	)
}

export default AddAddressForm
