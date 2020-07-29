import React, { useContext } from 'react'
import './Main.css'
import LoginForm from '../LoginForm/LoginForm'
import { LoggedInContext } from '../context/LoggedInContext'
import { Switch, Route } from 'react-router-dom'
import { ListContainer } from '../AddressList/ListContainer'
import LogoutForm from '../LoginForm/LogoutForm'
import AddAddress from '../routes/Add/AddAddress'
import Search from '../routes/Search/Search'
import Tour from '../routes/Tour/Tour'

const Main = () => {
	const isLogged = useContext(LoggedInContext)

	return (
		<div className='main_wrapper'>
			<div className='content__container'>
				{!isLogged ? (
					<Route
						path='/'
						render={(props) => <LoginForm {...props} />}
					/>
				) : (
					<Switch>
						<Route
							path='/account'
							render={(props) => (
								<LogoutForm {...props} />
							)}
						/>
						<Route
							path='/add-address'
							render={(props) => (
								<AddAddress {...props} />
							)}
						/>
						<Route
							path={'/address'}
							render={(props) => (
								<ListContainer {...props} />
							)}
						/>
						<Route
							path={'/search'}
							render={(props) => <Search {...props} />}
						/>
						<Route
							path={'/tour'}
							render={(props) => <Tour {...props} />}
						/>
					</Switch>
				)}
			</div>
		</div>
	)
}

export default Main
