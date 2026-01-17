import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiIntance from "../../api/apiIntance";

export const createTodo = createAsyncThunk('todo/createTodo',async(todo,{rejectWithValue})=>{
    try {
        let response = await apiIntance.post("/todo.json", todo)
        console.log(response);
        return {...todo, id: response.data.name};
    } catch (error) {
        return rejectWithValue({error : error.message})
    }
})

export const getAllTodos = createAsyncThunk('todo/getAllTodos', async(_,{rejectWithValue})=>{
    try {
        let response = await apiIntance.get('/todo.json')
        return response.data
    } catch (error) {
        return rejectWithValue({error : error.message})
    }
})

const todoSlice = createSlice({
    name : "todo",
    initialState : {
        todos : []
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(createTodo.fulfilled,(state,action)=>{
            console.log(action.payload);
            
        })

        builder.addCase(getAllTodos.fulfilled,(state,action)=>{
            console.log(action.payload);
            
        })
    }
})

export default todoSlice.reducer;