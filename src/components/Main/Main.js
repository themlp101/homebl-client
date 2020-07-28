import React, { useContext } from 'react'
import './Main.css'
import LoginForm from '../LoginForm/LoginForm'
import { LoggedInContext } from '../context/LoggedInContext'

const Main = () => {
	const { loggedIn } = useContext(LoggedInContext)
	return (
		<div className='main_wrapper'>
			<div className='content__container'>
				{loggedIn ? (
					<LoginForm />
				) : (
					<p>{`Yay, you're logged in!`}</p>
				)}
			</div>
		</div>
	)
}

export default Main
