import { useState, useEffect } from 'react'
import Location from './components/Location';
import axios from 'axios';
import './App.css'

function App() {
  
  const [rick, setRick] = useState({});
  const [typeLocation, setTypeLocation] = useState([]);

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1
    console.log(randomId)
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => { 
        setRick(res.data)
        setTypeLocation(res.data.residents)
      });
  }, []);

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
      .then(res => setRick(res.data));
  }

  console.log(rick);

  return (
    <div className='Card'> 
      <div className="App">
      <Location/>
      <h1>{rick.name}</h1>
      <div>
        <ul className='information'>
          <li>Type: {rick.residents?.type}</li>
          <li>Dimension: {rick.dimension}</li>
          <li>Population: {rick.residents?.length}</li>
        </ul>
      </div>
      <input 
        type="text"
        value={rick}
        onChange={(e) => setRick(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      </div>
      <ul className="rickAndMorty-container">
      {typeLocation.residents?.map((resident) => (
       <Location url={resident} key={resident}/>
      ))}
      </ul> 
    </div>
    
  )
}

export default App
