import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'Todo',
    initialState : {
        todos : [],
        currentTodo : null
    },
    reducers : {
        addTodo(state, action){
            const todo = {
                id : Date.now(),
                text : action.payload,
                completed : false,
                isEditing : false
            }
            state.todos.push(todo)
        },
        removeTodo(state,action){
            const id = action.payload;
            state.todos = state.todos.filter(val => val.id != id)
        },
        toggleComplete(state,action){
            let item = state.todos.find(item => item.id == action.payload)
            if(item) item.completed = !item.completed
        },
        toggleEdit(state,action){
            let todo = state.todos.find(val => val.id == action.payload)
            if (todo) todo.isEditing = !todo.isEditing;
        },
        updateTodo(state,action){
            const {id, text} = action.payload;
            const todo = state.todos.find(val => val.id == id)
            if(todo){
                todo.text = text
            }
            state.currentTodo = null
        },
        setCurrentTodo(state,action){
            state.currentTodo = action.payload
        }
    }
})

export default todoSlice.reducer;
export const {
    addTodo, 
    removeTodo, 
    toggleComplete, 
    toggleEdit, 
    updateTodo, 
    setCurrentTodo
} = todoSlice.actions;
