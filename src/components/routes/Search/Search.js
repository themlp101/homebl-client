import React from 'react'
import './Search.css'

const Search = () => {
	return (
		<div>
			<header class='search__controls'>
				<div class='button__container'>
					<button class='button__'>SEE FAVORITES</button>
				</div>
				<form action='' class='search__form'>
					<input
						aria-label='search__input'
						type='text'
						name='search__input'
						class='search__input'
						value=''
						placeholder='Search your saved homes'
					/>
					<button class='search__button'>Cancel</button>
				</form>
			</header>
			<div class='seach__results__container'>
				<form action='' class='submit__form'>
					<button type='submit'>Search for "main"</button>
				</form>
				<div class='search__results'>
					<ul class='search__results__list'>
						<li class='search__results__item'>
							15 Main Avenue
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Search
