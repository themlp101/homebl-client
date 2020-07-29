import React, { useContext } from 'react'
import './Header.css'
import { LoggedInContext } from '../context/LoggedInContext'
import { Link } from 'react-router-dom'

const Header = () => {
	const isLogged = useContext(LoggedInContext)
	return (
		<header className='main_header'>
			<div className='sidebar__controls'>
				{!isLogged ? (
					<ul className='nav__link__list'>
						<li>
							<a href='account.html'>Account</a>
						</li>
					</ul>
				) : (
					<ul className='nav__link__list'>
						<li>
							<Link to='/address'>Home</Link>
						</li>
						<li>
							<Link to='/search'>Search</Link>
						</li>
						<li>
							<Link to='/add-address'>Add</Link>
						</li>
						<li>
							<Link to='/tour'>Tour</Link>
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
