import React from 'react'
import './Main.css'
import LoginForm from '../LoginForm/LoginForm'

const Main = () => {
	return (
		<main className='main_wrapper'>
			<div className='content__container'>
				<LoginForm />
			</div>
		</main>
	)
}

export default Main
