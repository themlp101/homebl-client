import React, { useContext } from 'react'
import './Main.css'
import LoginForm from '../LoginForm/LoginForm'
import { LoggedInContext } from '../context/LoggedInContext'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ListContainer } from '../AddressList/ListContainer'
import LogoutForm from '../LoginForm/LogoutForm'
import AddAddress from '../routes/Add/AddAddress'
import Search from '../routes/Search/Search'
import Tour from '../routes/Tour/Tour'
import RegisterForm from '../LoginForm/RegisterForm'

const Main = () => {
	const { isLogged, setIsLogged } = useContext(LoggedInContext)

	return (
		<div className='main_wrapper'>
			<h1 style={{ visibility: 'hidden' }}>HOMEBL</h1>
			<div
				data-testid='main-container'
				className='content__container'
			>
				<Switch>
					<Route
						exact
						path='/'
						render={() =>
							!isLogged ? (
								<Redirect to={'/login'} />
							) : (
								<Redirect to={'/address'} />
							)
						}
					/>
					<Route
						path='/account'
						render={(props) => (
							<LogoutForm
								{...props}
								setIsLogged={setIsLogged}
							/>
						)}
					/>
					<Route
						exact
						path='/add-address'
						render={(props) => (
							<AddAddress
								{...props}
								isLogged={isLogged}
								setIsLogged={setIsLogged}
							/>
						)}
					/>
					<Route
						path={'/address'}
						render={(props) => (
							<ListContainer {...props} />
						)}
					/>
					<Route
						path='/login'
						render={(props) => (
							<LoginForm
								{...props}
								setIsLogged={setIsLogged}
							/>
						)}
					/>
					<Route
						path='/register'
						render={(props) => (
							<RegisterForm
								{...props}
								setIsLogged={setIsLogged}
							/>
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
			</div>
		</div>
	)
}

export default Main
