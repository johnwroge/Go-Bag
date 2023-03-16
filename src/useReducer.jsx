import React, {useState, useReducer } from 'react'


//global variable in caps
const ACTIONS   = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement'
}


//reducer function updates state values
function reducer(state, action){

    switch (action.type) {
        case 'increment':
            return { count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default: 
            return state
    }
}

export default function useReducer(){

    const [state, dispatch] = useReducer(reducer, {count: 0})

    function increment(){
        dispatch({ type: ACTIONS.INCREMENT })
    }

    function decrement(){
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return ( <>
        <button onClick = {decrement}> Decrement </button>        
        <span> {state.count}</span>
        <button onClick = {increment}> Increment </button>
        </>
    )

}