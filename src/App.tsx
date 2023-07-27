import React from 'react';
import { useState, useEffect, ReactNode } from 'react'
import './App.css'


// fetch and display with functional components 
// function App() {
//   //interface describing state type
//   interface card {
//     name: string;
//     height: number;
//     mass: number;
//   }
//   //creating state and setstate
//   const [characters, setCharacters] = useState<card[]>([])
//   //using useEffect to call api and set state
//   useEffect(() => {
//     fetch("https://swapi.dev/api/people")
//     .then(res => res.json())
//     .then(char => { setCharacters(char.results)})
//     .catch(err => console.log(err))
//   },[]) 

// //can access array index from second parameter of map function
// //need to return a callback function with () instead of {} I think because
// //of implicit return with parens

// //to render the first 10 or so, use conditional index < 10 && <li...
// const characterList = characters.map((char,index) => (
//   index < 10 &&
//   <li key = {`char-${index}`} className = "card">
//     <p>{char.name} </p>
//     <p> index {index}</p>
//     <p> {char.height}</p>
//     <p> {char.mass}</p>
//   </li>
// ))




// //return rendered character list within an unordered list 
//   return (
//     <div className="App">
//       <ul> 
//       {characterList}
                                                                     
//       </ul>         
//     </div>
//   )
// }

// function App () {


//   interface Char{
//     name: String,
//     height: number,
//     mass: number;

//   }
//   const [characters, setCharacters]= useState<Char[]>([]);

//   useEffect(() => {
//     fetch("https://swapi.dev/api/people")
//     .then(res => res.json())
//     .then(data => setCharacters(data.results))
//   },[])


//   const cardsToDisplay = characters.map((char, index)=> (
//     <li key = {`character-${index}`}>
//       <p>name: {char.name}</p>
//       <p>height: {char.height}</p>
//       <p>mass: {char.mass}</p>
//     </li>
//   )
//   )
// return (
//   <>
//     {cardsToDisplay}
//   </>

// )
// }


'https://swapi.dev/api/people'

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

  return (
    <> 
      {display}
    </>
  )

}

export default App; 