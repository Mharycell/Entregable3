import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/location.css'

const Location = ({ url }) => {
	const [data, setData] = useState({})

	useEffect(() => {
		axios.get(url).then((res) => setData(res.data))
	}, [])

	return (
		<>
			<div className='Location'>
				<div className='Card__image'>
					<img src={data?.image} alt='' />
				</div>
				<div className='Card__data'>
					<ul>
						<li>
							{' '}
							<b>{data?.name}</b>{' '}
						</li>
						<li>
							<h5>SPECIE: </h5>
						</li>
						<li>{data?.species}</li>
						<li>
							<h5>ORIGIN:</h5>
						</li>
						<li>{data.origin?.name}</li>
						<li>
							<h5>EPISODE:</h5>
						</li>
						<li>{data.episode?.length}</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Location
