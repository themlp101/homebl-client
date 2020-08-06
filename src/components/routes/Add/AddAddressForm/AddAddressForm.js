import React from 'react'
import useAddAddress from '../../../../hooks/useAddAddress'
/**
 *
 * @param {object} history - render prop
 */
const AddAddressForm = ({ history }) => {
	const {
		handleSubmit,
		address_1,
		setAddress_1,
		city,
		setCity,
		state,
		setState,
		zip_code,
		setZip_Code,
		error,
	} = useAddAddress(history)
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

			<header className='add__controls'>
				<button onClick={() => history.goBack()}>
					CANCEL
				</button>
				<button
					type='submit'
					label='save'
					onClick={handleSubmit}
				>
					SAVE
				</button>
			</header>
		</form>
	)
}

export default AddAddressForm
