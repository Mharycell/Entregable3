import React from 'react'
import './css/search.css'
import { useState, useEffect } from 'react'

const Search = ({ rickandmorty, searchDesdeProps }) => {
	const [typeLocation, setTypeLocation] = useState('')
	const searchLocation = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
			.then((res) => setRick(res.data))
	}
	return (
		<div className='Search'>
			<ul>
				<li>
					<h2>Name: </h2>
					<p>{rickandmorty.name}</p>
				</li>
				<li>
					<h2>Type: </h2>
					<p>{rickandmorty.type}</p>
				</li>
				<li>
					<h2>Dimension: </h2>
					<p>{rickandmorty.dimension}</p>
				</li>
				<li>
					<h2>Population: </h2>
					<p>{rickandmorty.residents?.length}</p>
				</li>
			</ul>
			{/* <h1>{rick.name}</h1> */}
			{/* <div>
				<ul className='information'>
					<li>Type: {rick.type}</li>
					<li>Dimension: {rick.dimension}</li>
					<li>Population: {rick.residents?.length}</li>
				</ul>
			</div> */}
			<input
				className='input'
				type='text'
				value={typeLocation}
				onChange={(e) => setTypeLocation(e.target.value)}
			/>
			<button onClick={searchDesdeProps}>Search</button>
		</div>
	)
}

export default Search
