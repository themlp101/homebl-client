import React, { useContext, useEffect } from 'react'
import './Header.css'
import { LoggedInContext } from '../context/LoggedInContext'
import { Link } from 'react-router-dom'
import { useTokenService } from '../../services/token-services'
import { MdHome, MdAddCircle, MdAccountCircle } from 'react-icons/md'
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
							<button className='header__btn'>
								<Link aria-label='Login' to='/'>
									<MdAccountCircle className='header__icon' />
								</Link>
								<label>LOGIN/REGISTER</label>
							</button>
						</li>
					</ul>
				) : (
					<ul className='nav__link__list'>
						<li>
							<button className='header__btn'>
								<Link aria-label='Home' to='/address'>
									<MdHome className='header__icon' />
								</Link>
								<label>HOME</label>
							</button>
						</li>

						<li>
							<button className='header__btn'>
								<Link
									aria-label='Add Address'
									to='/add-address'
								>
									<MdAddCircle className='header__icon' />
								</Link>
								<label>ADD ADDRESS</label>
							</button>
						</li>

						<li>
							<button className='header__btn'>
								<Link
									aria-label='Log in or Log out'
									to='/account'
								>
									<MdAccountCircle className='header__icon' />
								</Link>
								<label>LOGIN</label>
							</button>
						</li>
					</ul>
				)}
			</div>
		</header>
	)
}

export default Header
