import React from 'react'
import './ListContainer.css'
import AddressList from './List/AddressList'
import { Route, Switch } from 'react-router-dom'
import ListResults from './ListResults/ListResults'
import EditResults from './ListResults/EditResults/EditResults'

export const ListContainer = (props) => {
	return (
		<div className='list__flexbox'>
			<div className='list__container'>
				<AddressList {...props} />
			</div>
			<Switch>
				<Route
					exact
					path={'/address/:addressId'}
					render={(props) => <ListResults {...props} />}
				/>
				<Route
					path={'/address/:addressId/edit'}
					render={(props) => <EditResults {...props} />}
				/>
			</Switch>
		</div>
	)
}
