import React from 'react'
import { useLogout } from '../../hooks/useLogout'
import './Logout.css'

const LogoutForm = (props) => {
	const { handleLogout, error } = useLogout(props)
	return (
		<div className='form__container'>
			{error && <p>{error}</p>}
			<form
				className='logout__form'
				onSubmit={(event) => handleLogout(event)}
			>
				<header className='logout__controls'>
					<button
						type='button'
						onClick={() => props.history.push('/address')}
					>
						CANCEL
					</button>
					<button type='submit'>LOGOUT</button>
				</header>
			</form>
		</div>
	)
}

export default LogoutForm
