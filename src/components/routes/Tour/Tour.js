import React from 'react'
import './Tour.css'

const Tour = () => {
	return (
		<div>
			<header className='tour__controls__container'>
				<button className='tour__control__button-start'>
					START
				</button>
				<button className='tour__control__button-cancel'>
					CANCEL
				</button>
			</header>
			<div className='flexbox'>
				<div className='tour__list__container'>
					<ul className='tour__list'>
						<li className='tour__list__item selected'>
							<p>123 Main St</p>
							<p>Boston, MA 02101</p>
						</li>
						<li className='tour__list__item'>
							<p>58 Juniper St</p>
							<p>Boston, MA 02101</p>
						</li>
						<li className='tour__list__item'>
							<p>1325 Elmo Ln</p>
							<p>Boston, MA 02101</p>
						</li>
					</ul>
				</div>
				<div className='tour__map'>
					<div className='info flexbox'>
						<h4>Link to directions for selected Home</h4>
						<footer className='tour__controls'>
							<div className='button__container flexbox'>
								<button className='go__button'>
									GO
								</button>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tour
