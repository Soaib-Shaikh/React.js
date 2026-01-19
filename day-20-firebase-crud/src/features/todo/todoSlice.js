import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "./thunk";

const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        todos : [],
        loading : false,
        error : null,
        message : null,
    },
    reducers : {

    },
    extraReducers : (builder) => {
        // create Todo
        builder.addCase(createTodo.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(createTodo.fulfilled,(state,action)=>{
            state.loading = false;
            state.todos.push(action.payload)
        })

        builder.addCase(createTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // getAllTodos
        builder.addCase(getAllTodos.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(getAllTodos.fulfilled,(state,action)=>{
            state.loading = false;
            state.todos = action.payload;

        })

        builder.addCase(getAllTodos.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // delete Todo
        builder.addCase(deleteTodo.pending,(state)=>{
            state.message = "Todo Deleting....."
        })

        builder.addCase(deleteTodo.fulfilled,(state,action)=>{
            state.message = null;
            state.todos = state.todos.filter(val => val.id != action.payload)
        })

        builder.addCase(deleteTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // update Todo
        builder.addCase(updateTodo.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(updateTodo.fulfilled,(state,action)=>{
            state.loading = false
            let data = action.payload;
            state.todos = state.todos.map((todo)=>{
                if(todo.id == data.id) return data;
                return todo;
            })
        })

        builder.addCase(updateTodo.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default todoSlice.reducer