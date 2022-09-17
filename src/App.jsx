import { useState, useEffect } from 'react'
import Location from './components/Location'
import axios from 'axios'
import './App.css'
import Search from './components/Search'
import Header from './components/Header'

function App() {
	const [rick, setRick] = useState({})

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 125) + 1

		axios.get(`https://rickandmortyapi.com/api/location/${randomId}`).then((res) => {
			setRick(res.data)
		})
	}, [])
	console.log(rick)

	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Search rickandmorty={rick} />
				<div>
					<ul className='rickAndMorty-container'>
						{rick.residents?.map((resident) => (
							<Location url={resident} key={resident} />
						))}
					</ul>
				</div>
			</main>
		</div>
	)
}

export default App
