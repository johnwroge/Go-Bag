// import React from 'react';
// import { useState, useEffect, ReactNode } from 'react'
// import './App.css'
 



// function App (){

//   interface Character {
//     name: String,
//     height: Number,
//     mass: Number,
//     eye_color: String,
//     hair_color: String
//   }

//   const [ characters, setCharacters ] = useState<Character[]>([])

//   useEffect(()=>{
//     fetch('https://swapi.dev/api/people')
//     .then(res => res.json())
//     .then(res => setCharacters(res.results))
//     .catch(err =>  console.log(err))
//   },[])


//   const display = characters.map((char, index )=> (
//     <li key = {`character-${index}`}> 
//       <p>Name: {char.name}</p>
//       <p>Height: {char.height} </p>
//       <p>Mass: {char.mass}</p>
//       <p>Eye Color: {char.eye_color}</p>
//       <p>Hair Color: {char.hair_color}</p>
//     </li>
//   ))
  
//   {/* {display} */}
//   return (
//     <div> 
      
//     </div>
//   )

// }

// export default App; 

import React, { useEffect } from "react";
import './App.css'
export default function App(){
  const [characters, setCharacters] = React.useState<Character[]>([])

  interface Character {
    name: String,
    mass: Number,
    height: Number,
    hair_color: String
  }

  React.useEffect(() => {
    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => setCharacters(data.results))
  },[])

  const display = characters.map((el, i) => (
    <div key = {`character-${i}`} className = 'card'> 
        <p>Name: {el.name}</p>
        <p> Mass: {el.mass}</p>
        <p> Height: {el.height}</p>
        <p> Hair Color: {el.hair_color}</p>
    </div>
  ))


  return (
    <>{display}</>
  )

}