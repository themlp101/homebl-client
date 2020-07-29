import React from 'react'
import './ListContainer.css'
import AddressList from './List/AddressList'
import { Route } from 'react-router-dom'
import ListResults from './ListResults/ListResults'

export const ListContainer = (props) => {
	return (
		<div className='flexbox'>
			<div className='list__container'>
				<AddressList />
			</div>
			<Route
				path={'/address/:addressId'}
				render={(props) => <ListResults {...props} />}
			/>
		</div>
	)
}
