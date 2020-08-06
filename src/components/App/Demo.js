import React from 'react'
import './Demo.css'
const Demo = ({ history }) => {
	return (
		<div className='demo__container'>
			<header className='demo__header'>
				<h1>Homebl Demo</h1>
				<h2>Welcome to my solo capstone project!</h2>
			</header>

			<div>
				<div>
					<h3>Instructions:</h3>
					<p>
						At the bottom of the page is a button that
						will take you to the login screen. From there
						you will be prompted to either login as an
						existing user, or register as a new user.
					</p>
					<h4>Use existing username:</h4>
					<ul>
						<li>Username: matty</li>
						<li>Password: password1234</li>
					</ul>
					<h4>To register, use following format:</h4>
					<ul>
						<li>Full Name: no constraints</li>
						<li>
							Username: can be any unique character
							combination, not blank
						</li>
						<li>
							Password: at least 5 characters, no
							special characters needed
						</li>
					</ul>
				</div>
				<div>
					<h3>Use:</h3>
					<p>
						Using the app is simple! Once you login you
						will be redirected to address page. You will
						either be prompted to add your first address
						(if you are registering as a new user), or a
						list of addresses.
					</p>
					<h4>Seeing your addresses</h4>
					<p>
						The main page lists all the user's current
						addresses. From here the user can click on an
						address to open up a detailed view. From the
						detailed view, the user can see all of her
						notes connected to that address
					</p>
					<h4>Adding a new address</h4>
					<p>
						By navigating to the add address page, the
						user can add an address to the list. The
						navigation bar has an 'Add' button,
						represented by a '+' icon. This link will take
						the user to the add address page, which is a
						controlled form. After submission, the user is
						taken to the newly created address page to add
						notes.
					</p>
					<h4>Editing your addresses</h4>
					<p>
						If the user is in the detailed view, she can
						use the navigation bar to edit or delete an
						address. If the user decides to delete a note,
						the user will be asked to confirm her
						decision. After which, the address, along with
						its notes, is removed from the database
					</p>
					<h4>Adding and editing notes</h4>
					<p>
						If the user is on the detailed page, she can
						easily add a note by pressing the 'Add Note'
						button at the bottom of the container. If the
						user wishes to edit the note, she can click on
						the edit button, which is on every note.
						Clicking the edit button will display note in
						a editable field. The user can then cancel the
						action, delete the note, or submit changes
						using a note control bar.
					</p>
				</div>
			</div>
			<button
				className='demo__btn'
				type='button'
				onClick={() => history.push('/')}
			>
				GO
			</button>
		</div>
	)
}

export default Demo
