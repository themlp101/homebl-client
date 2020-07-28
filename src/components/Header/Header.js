import React from 'react'
import './Header.css'

const Header = () => {
	return (
		<header className='main_header'>
			<div className='sidebar__controls'>
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
			</div>
		</header>
	)
}

export default Header
