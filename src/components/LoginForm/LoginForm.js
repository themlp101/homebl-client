import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import './Login.css'
const LoginForm = (props) => {
	const {
		handleChange,
		handleSubmit,
		user_name,
		password,
		error,
	} = useLogin(props)
	return (
		<div data-testid='login-form' className='form__container'>
			{error && <p>{error}</p>}
			<form className='login__form' onSubmit={handleSubmit}>
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
				<header className='login__controls'>
					<button
						type='button'
						onClick={() =>
							props.history.push('/register')
						}
					>
						REGISTER
					</button>
					<button type='submit'>LOGIN</button>
				</header>
			</form>
		</div>
	)
}

export default LoginForm
