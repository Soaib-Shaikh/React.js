import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'users',
    initialState : {
        users : []
    },
    reducers : {
        addUser : (state, action)=>{
            state.users.push({
                id: Date.now(),
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                completed : false
            })
        },
        deleteUser : (state, action)=>{
            state.users = state.users.filter(user => user.id != action.payload)
        }
    }
})

export default userSlice.reducer;
export const {addUser, deleteUser} = userSlice.actions