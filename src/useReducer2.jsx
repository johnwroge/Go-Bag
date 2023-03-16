import React, { useState, useReducer } from 'react'
import Todo from './Todo'



/*
power in useReducer is that you can keep all the different action types in 
the reducer function instead of separate functions/hooks for each. 

*/

//global variable in caps
const ACTIONS   = {
        ADD_TODO: 'add-todo',
        TOGGLE_TODO: 'toggle-todo',
        DELETE_TODO: 'delete-todo'

}


//reducer function updates state values
function reducer(state, action){

    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo =>  todo.id !== action.payload.id)
        default: 
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

export default function useReducer(){

    const [ todos, dispatch ] = useReducer(reducer, {count: 0})
    const [ name, setName ] = useState('')

function handleSubmit(e){
    //prevent page from refreshing 
    e.preventDefault()
    //type -> is being passed which goes to reducer function,
    //payload -> are parameters telling what we are performing
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name}})
    setName('')
}

    
    return (
        <>
            <form onSubmit = {handleSubmit} >
                <input type = "text" value = {name} onChange = {e => setName(e.target.value) }
                />
            </form>
            {todos.map(todo => {
                <Todo key = {todo.id} todo = { todo } dispatch = {dispatch} />
            })}
        </>
    )

}