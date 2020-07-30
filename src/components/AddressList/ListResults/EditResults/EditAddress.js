import React from 'react'

const EditAddress = ({
	address,
	updateAddress_1,
	error,
	updateCity,
	updateState,
	updateZipCode,
}) => {
	return (
		<>
			<form>
				<div className='input__container'>
					{error && <p>{error}</p>}
					<label htmlFor='address_1'>Address</label>
					<input
						className='input'
						aria-label='add address'
						type='text'
						name='address_1'
						defaultValue={address.address_1}
						required
						onChange={(e) =>
							updateAddress_1(e.target.value)
						}
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='city'>City</label>
					<input
						className='input'
						aria-label='add city'
						type='text'
						name='city'
						defaultValue={address.city}
						required
						onChange={(e) => updateCity(e.target.value)}
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='state'>State</label>
					<input
						className='input'
						aria-label='add state'
						type='text'
						name='state'
						defaultValue={address.state}
						maxLength='2'
						required
						onChange={(e) => updateState(e.target.value)}
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='zip_code'>Zip Code</label>
					<input
						className='input'
						aria-label='add zip code'
						type='text'
						name='zip_code'
						defaultValue={address.zip_code}
						minLength='5'
						maxLength='5'
						required
						onChange={(e) =>
							updateZipCode(e.target.value)
						}
					/>
				</div>
			</form>
		</>
	)
}

export default EditAddress
