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
		<header
			data-testid='header-container'
			className='main_header'
		>
			<div className='sidebar__controls'>
				{!isLogged ? (
					<ul className='nav__link__list'>
						<li>
							<button
								aria-label='Login or Register'
								className='header__btn'
							>
								<Link
									aria-label='Login or Register'
									to='/'
								>
									<MdAccountCircle className='header__icon' />
								</Link>
							</button>
						</li>
					</ul>
				) : (
					<ul
						data-testid='header-controls1'
						className='nav__link__list'
					>
						<li>
							<button
								aria-label='Home'
								className='header__btn'
							>
								<Link aria-label='Home' to='/address'>
									<MdHome className='header__icon' />
								</Link>
							</button>
						</li>

						<li>
							<button
								aria-label='Add Address'
								className='header__btn'
							>
								<Link
									aria-label='Add Address'
									to='/add-address'
								>
									<MdAddCircle className='header__icon' />
								</Link>
							</button>
						</li>

						<li>
							<button
								aria-label='Log in or Log out'
								className='header__btn'
							>
								<Link
									aria-label='Log in or Log out'
									to='/account'
								>
									<MdAccountCircle className='header__icon' />
								</Link>
							</button>
						</li>
					</ul>
				)}
			</div>
		</header>
	)
}

export default Header
