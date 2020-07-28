import React, { useContext } from 'react'
import './Header.css'
import { LoggedInContext } from '../context/LoggedInContext'

const Header = () => {
	const { loggedIn } = useContext(LoggedInContext)
	return (
		<header className='main_header'>
			<div className='sidebar__controls'>
				{loggedIn ? (
					<ul className='nav__link__list'>
						<li>
							<a href='account.html'>Account</a>
						</li>
					</ul>
				) : (
					<ul className='nav__link__list'>
						<li>
							<a href='../index.html'>Home</a>
						</li>
						<li>
							<a href='../search_page/search.html'>
								Search
							</a>
						</li>
						<li>
							<a href='../add_page/add.html'>Add</a>
						</li>
						<li>
							<a href='../tour_page/tour.html'>Tour</a>
						</li>
						<li>
							<a href='account.html'>Account</a>
						</li>
					</ul>
				)}
			</div>
		</header>
	)
}

export default Header
