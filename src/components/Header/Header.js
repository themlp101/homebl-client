import React, { useContext, useEffect } from 'react'
import './Header.css'
import { LoggedInContext } from '../context/LoggedInContext'
import { Link } from 'react-router-dom'
import { useTokenService } from '../../services/token-services'

const Header = () => {
	const { isLogged } = useContext(LoggedInContext)
	useEffect(() => {
		console.log('Logged in: ' + isLogged)
		useTokenService.hasAuthToken()
		return () => {}
	}, [isLogged])
	return (
		<header className='main_header'>
			<div className='sidebar__controls'>
				{!isLogged ? (
					<ul className='nav__link__list'>
						<li>
							<Link to='/'>Account</Link>
						</li>
					</ul>
				) : (
					<ul className='nav__link__list'>
						<li>
							<Link to='/address'>Home</Link>
						</li>

						<li>
							<Link to='/account'>Account</Link>
						</li>
					</ul>
				)}
			</div>
		</header>
	)
}

export default Header
