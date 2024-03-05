import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    listOfTodo: [ { id:1, details:"Watch Redux Tutorial", isActive: true}, { id:2,details: "Publish an Article", isActive: true}],
    listOfDoneToDo: [ { id:1, details:"Watch Redux Tutorial", isActive: false}, { id:2,details: "Publish an Article", isActive: false}],
    userName: "Rubayat"
}
export const toDoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.listOfTodo.push(action.payload)
        },
        addToDoneList: (state, action) => {
            //state.listOfDoneToDo.push(action.payload)
            let array = state.listOfDoneToDo
            let index = action.payload.index
            let newArray = [...array.slice(0, index), action.payload, ...array.slice(index + 1)];
            state.listOfDoneToDo = newArray;
        },
        updateToDo: (state, action) => {
            const { id, isActive } = action.payload;
            const todoToUpdate = state.listOfTodo.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.isActive = isActive;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToDo, updateToDo, addToDoneList } = toDoListSlice.actions

export default toDoListSlice.reducer