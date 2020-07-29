import React from 'react'
import './Search.css'

const Search = () => {
	return (
		<div>
			<header className='search__controls'>
				<div className='button__container'>
					<button className='button__'>
						SEE FAVORITES
					</button>
				</div>
				<form action='' className='search__form'>
					<input
						aria-label='search__input'
						type='text'
						name='search__input'
						className='search__input'
						defaultValue=''
						placeholder='Search your saved homes'
					/>
					<button className='search__button'>Cancel</button>
				</form>
			</header>
			<div className='seach__results__container'>
				<form action='' className='submit__form'>
					<button type='submit'>Search for "main"</button>
				</form>
				<div className='search__results'>
					<ul className='search__results__list'>
						<li className='search__results__item'>
							15 Main Avenue
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Search
