import React from 'react'
import './css/search.css'
import { useState, useEffect } from 'react'

const Search = ({ rickandmorty, searchLocation, typeLocation, setTypeLocation }) => {
	return (
		<div className='Search'>
			<div className='information'>
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
			</div>
			<div className='form'>
				<input
					className='input'
					type='text'
					value={typeLocation}
					onChange={(e) => setTypeLocation(e.target.value)}
					placeholder='Search Location'
				/>
				<button onClick={searchLocation}>Search</button>
			</div>
		</div>
	)
}

export default Search
