import { useState, useEffect, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// fetch and display with functional components 

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
    .then(char => {
      // console.log(char.results)
      setCharacters(char.results)
    })
    .catch(err => console.log(err))
  },[]) 
// console.log(characters)
//can access array index from second parameter of map function
const characterList = characters.map((char,index) => (
  <li key = {`char-${index}`} className = "card">
    <p>{char.name} </p>
    <p> index {index}</p>
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
