import React from 'react';
import { useState, useEffect, ReactNode } from 'react'
import './App.css'
 



function App (){

  interface Character {
    name: String,
    height: Number,
    mass: Number,
    eye_color: String,
    hair_color: String
  }

  const [ characters, setCharacters ] = useState<Character[]>([])

  useEffect(()=>{
    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(res => setCharacters(res.results))
    .catch(err =>  console.log(err))
  },[])


  const display = characters.map((char, index )=> (
    <li key = {`character-${index}`}> 
      <p>Name: {char.name}</p>
      <p>Height: {char.height} </p>
      <p>Mass: {char.mass}</p>
      <p>Eye Color: {char.eye_color}</p>
      <p>Hair Color: {char.hair_color}</p>
    </li>
  ))
  
  {/* {display} */}
  return (
    <div> 
      
    </div>
  )

}

export default App; 