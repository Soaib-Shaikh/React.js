import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'Todo',
    initialState : {
        todos : []
    },
    reducers : {
        addTodo(state,action){
            state.todos.push(action.payload)
        },
        removeTodo(state,action){
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }
})

export default todoSlice.reducer;

export const {addTodo, removeTodo} = todoSlice.actions;