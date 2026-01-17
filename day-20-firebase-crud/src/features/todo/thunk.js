import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiIntance } from "../../api/apiInstance";

export const createTodo = createAsyncThunk('todos/createTodo',async(todo, {rejectWithValue})=>{
    try {
        let response = await apiIntance.post('/todos.json', todo);
        return {...todo, id: response.data.name}
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getAllTodos = createAsyncThunk('todos/getAllTodos',async(_, {rejectWithValue})=>{
    try {
        let response = await apiIntance.get('/todos.json');
        return Object.keys(response.data).map((key)=>{
            return (
                {...response.data[key], id: key}
            )
        })
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo',async(id,{rejectWithValue})=>{
    try {
        await apiIntance.delete(`/todos/${id}.json`,id)
        return id;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})