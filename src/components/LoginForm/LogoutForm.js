import React from 'react'
import { useLogout } from '../../hooks/useLogout'
import './Logout.css'

const LogoutForm = (props) => {
	const { handleLogout, error } = useLogout()
	return (
		<div className='form__container'>
			{error && <p>{error}</p>}
			<form className='logout__form'>
				<header className='logout__controls'>
					<button
						onClick={() => props.history.push('/address')}
					>
						CANCEL
					</button>
					<button onClick={handleLogout}>LOGOUT</button>
				</header>
			</form>
		</div>
	)
}

export default LogoutForm
