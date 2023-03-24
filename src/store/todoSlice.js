
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },

    //ACTIONS
    reducers: {

        //Добавить
        addTodo(state, action) {
            console.log(state)
            console.log(action)

            state.todos.push({
                text: action.payload.text,
                id: new Date().toISOString(),
                completed: false,
            })
        },

        //Удалить
        removeTodo(state, action) {
            state.todos = state.todos.filter(el => el.id !== action.payload.id)
        },


        //Переключатель
        handleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
    }
})

export const { addTodo, removeTodo, handleComplete } = todoSlice.actions
export default todoSlice.reducer