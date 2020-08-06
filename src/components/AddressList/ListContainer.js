import React from 'react'
import './ListContainer.css'
import AddressList from './List/AddressList'
import { Route, Switch } from 'react-router-dom'
import ListResults from './ListResults/ListResults'
import EditResults from './ListResults/EditResults/EditResults'
/**
 * This is a container component for the address list
 * @param {object} props - render props, desstructured for easier access in children components
 */
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
