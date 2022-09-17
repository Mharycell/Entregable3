import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './css/card.css'

const Location = ({ url }) => {
	const [data, setData] = useState({})

	useEffect(() => {
		axios.get(url).then((res) => setData(res.data))
	}, [])

	return (
		<>
			<div className='Card'>
				<div className='Card__status'>
					<img src={data?.image} alt='' />
				</div>
			</div>
			<div className='Card__data'>
				<ul>
					<li>
						{' '}
						<h2>{data?.name}</h2>{' '}
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
			<h1>{data.name}</h1>
		</>
	)
}

export default Location
