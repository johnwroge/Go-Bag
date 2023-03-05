import { useState, useEffect, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  interface card {
    name: string;
    height: number;
    mass: number;
  }

  const [characters, setCharacters] = useState<card[]>([])

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(char => setCharacters(char.results))
    .catch(err => console.log(err))
  },[]) 

const characterList = characters.map((char,index) => (
  <li key = {`char-${index}`} className = "card">
    <p>{char.name} </p>
    <p> {char.height}</p>
    <p> {char.mass}</p>
  </li>
))


  return (
    <div className="App">
      <ul> 
      {characterList}
      </ul>
      
    </div>
  )
}

export default App
