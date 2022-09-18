import { useState, useEffect } from 'react'
import Location from './components/Location'
import axios from 'axios'
import './App.css'
import Search from './components/Search'
import Header from './components/Header'
import Pagination from './components/Pagination'

function App() {
	const [rick, setRick] = useState({})
	const [typeLocation, setTypeLocation] = useState('')
	const [page, setPage] = useState(1)
	const [pages, setPages] = useState(10)

	useEffect(() => {
		const randomId = Math.floor(Math.random() * 125) + 1
		axios.get(`https://rickandmortyapi.com/api/location/${randomId}`).then((res) => {
			setRick(res.data)
		})
	}, [])

	const maximo = rick.residents?.length / pages

	const searchLocation = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
			.then((res) => setRick(res.data))
	}

	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Search
					rickandmorty={rick}
					searchLocation={searchLocation}
					typeLocation={typeLocation}
					setTypeLocation={setTypeLocation}
				/>
				<div>
					<ul className='rickAndMorty-container'>
						{rick.residents
							?.slice((page - 1) * pages, (page - 1) * pages + pages)
							.map((resident) => (
								<Location url={resident} key={resident} />
							))}
					</ul>
				</div>
				<Pagination page={page} setPage={setPage} maximo={maximo} />
			</main>
		</div>
	)
}

export default App;
