import React from 'react'
import useGetAddress from '../../../hooks/useGetAddress'

const ListResults = (props) => {
	const { address, error } = useGetAddress(props)
	return (
		<div className='list__results__container'>
			<header className='main__controls'>
				<button>Add to Tour</button>
				<button>Add to Favorites</button>
				<button>Edit</button>
				<button>Delete</button>
			</header>
			{error ? (
				<p>{error}</p>
			) : (
				<div>
					<h2>{address && address.address_1}</h2>
					<div className='main__notes'>
						<p>
							Notes: OMG I love this house so much! The
							porch is just to die for!
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Vel veniam hic dolores
							corrupti sit. Harum at voluptates corrupti
							voluptas quisquam!
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default ListResults
