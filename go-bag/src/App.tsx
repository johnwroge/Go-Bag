import { useState, useEffect, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// fetch and display with functional components 

function App() {
  //interface describing state type
  interface card {
    name: string;
    height: number;
    mass: number;
  }
  //creating state and setstate
  const [characters, setCharacters] = useState<card[]>([])
  //using useEffect to call api and set state
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
    .then(res => res.json())
    .then(char => { setCharacters(char.results)})
    .catch(err => console.log(err))
  },[]) 

//can access array index from second parameter of map function
//need to return a callback function with () instead of {} I think because
//of implicit return with parens
const characterList = characters.map((char,index) => (
  <li key = {`char-${index}`} className = "card">
    <p>{char.name} </p>
    <p> index {index}</p>
    <p> {char.height}</p>
    <p> {char.mass}</p>
  </li>
))
//return rendered character list within an unordered list 
  return (
    <div className="App">
      <ul> 
      {characterList}
      </ul>
      
    </div>
  )
}


 export default App


