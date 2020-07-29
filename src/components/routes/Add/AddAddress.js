import React from 'react'
import './AddAddress.css'

const AddAddress = () => {
	return (
		<div className='form__container'>
			<form action='' className='add__form'>
				<div className='input__container'>
					<label htmlFor='add_address'>Address</label>
					<input
						className='input'
						aria-label='add address'
						type='text'
						name='address_1'
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='add_zip'>Zip Code</label>
					<input
						className='input'
						aria-label='add_zip'
						type='text'
						name='zip_code'
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='add_state'>State</label>
					<input
						className='input'
						aria-label='add_state'
						type='text'
						name='state'
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='add_description'>
						Add Description
					</label>
					<textarea
						aria-label='add_address'
						type='text'
						name='note'
					></textarea>
				</div>
				<header className='add__controls'>
					<button>CANCEL</button>
					<button>SAVE</button>
				</header>
			</form>
		</div>
	)
}

export default AddAddress
