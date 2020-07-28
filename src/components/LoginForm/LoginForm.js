import React from 'react'
import { useLogin } from '../../hooks/useLogin'

const LoginForm = () => {
	const {
		handleChange,
		handleSubmit,
		user_name,
		password,
		error,
	} = useLogin()

	return (
		<div className='form__container'>
			{error && <p>{error}</p>}
			<form className='add__form' onSubmit={handleSubmit}>
				<div className='input__container'>
					<label htmlFor='username'>Username</label>
					<input
						className='input'
						aria-label='username'
						type='text'
						name='user_name'
						value={user_name}
						onChange={handleChange}
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
						onChange={handleChange}
					/>
				</div>
				<header className='add__controls'>
					<div className='button__container'>
						<button
							onClick={() => console.log('Go back')}
						>
							CANCEL
						</button>
						<button type='submit'>LOGIN</button>
					</div>
				</header>
			</form>
		</div>
	)
}

export default LoginForm
