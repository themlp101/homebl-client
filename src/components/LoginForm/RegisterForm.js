import React from 'react'

import './Login.css'
import useRegisterUser from '../../hooks/useRegisterUser'
const RegisterForm = (props) => {
	const {
		handleRegister,
		user_name,
		password,
		full_name,
		password2,
		setUsername,
		setFullName,
		setPassword,
		setPassword2,
		error,
	} = useRegisterUser(props)
	return (
		<div className='form__container'>
			{error && <p>{error}</p>}
			<form className='login__form'>
				<div className='input__container'>
					<label htmlFor='full_name'>Full Name</label>
					<input
						className='input'
						aria-label='full name'
						type='text'
						name='full_name'
						value={full_name}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='username'>Username</label>
					<input
						className='input'
						aria-label='username'
						type='text'
						name='user_name'
						value={user_name}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className='input__container'>
					<label htmlFor='password'>Password</label>
					<input
						className='input'
						aria-label='password'
						type='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{password && (
					<div className='input__container'>
						<label htmlFor='password2'>
							Re-Enter Password
						</label>
						<input
							className='input'
							aria-label='password'
							type='password'
							name='password2'
							value={password2}
							onChange={(e) =>
								setPassword2(e.target.value)
							}
						/>
					</div>
				)}

				<header className='login__controls'>
					<button onClick={() => props.history.goBack()}>
						CANCEL
					</button>
					<button type='submit' onClick={handleRegister}>
						REGISTER/LOGIN
					</button>
				</header>
			</form>
		</div>
	)
}

export default RegisterForm
