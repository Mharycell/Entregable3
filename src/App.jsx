import { useState, useEffect } from 'react'
import Location from './components/Location'
import axios from 'axios'
import './App.css'
import Search from './components/Search'
import Header from './components/Header'
import pagination from './components/pagination'

function App() {
	const [rick, setRick] = useState({})
	const [typeLocation, setTypeLocation] = useState('')
	
	useEffect(() => {
		const randomId = Math.floor(Math.random() * 125) + 1
		axios.get(`https://rickandmortyapi.com/api/location/${randomId}`).then((res) => {
			setRick(res.data)
		})
	}, [])

	const searchLocation = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
			.then((res) => setRick(res.data))
	}
	
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Search rickandmorty={rick}
				type={typeLocation}
				setTypeLocation={setTypeLocation}
				searchLocation={searchLocation}/>
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

export default App;
