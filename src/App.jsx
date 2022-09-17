import { useState, useEffect } from 'react'
import Location from './components/Location';
import axios from 'axios';
import './App.css'
import image from "./assets/Rectangle 1.png"

function App() {
  
  const [rick, setRick] = useState({});
  const [typeLocation, setTypeLocation] = useState("");
 
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1
    
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res => { 
      setRick(res.data)
    });
    console.log(typeLocation)
  }, []);
  

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeLocation}`)
      .then(res => setRick(res.data));
  }
   
  return (
    <div className='Container'> 
      <div className="App">
        <header>
          <img className='image' src={image} alt="" />
        </header>      
      <h1>{rick.name}</h1>
      <div>
        <ul className='information'>
          <li>Type: {rick.type}</li>
          <li>Dimension: {rick.dimension}</li>
          <li>Population: {rick.residents?.length}</li>
        </ul>
      </div>
      <input className='input' 
        type="text"
        value={typeLocation}
        onChange={(e) => setTypeLocation(e.target.value)}
      />
      <button onClick={searchLocation}>Search</button>
      </div>
      <ul className="rickAndMorty-container">
      {rick.residents?.map((resident) => (
       <Location url={resident} key={resident}/>
      ))}
      </ul>     
    </div>
    
  )
}

export default App
