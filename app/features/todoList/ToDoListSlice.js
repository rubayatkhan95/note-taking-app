import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    listOfTodo: ["abc", "bbc"],
    userName: "Rubayat"
}
export const toDoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.listOfTodo.push(action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToDo } = toDoListSlice.actions

export default toDoListSlice.reducer