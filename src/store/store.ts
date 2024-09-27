import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './habit-slice'


const store =  configureStore({
    reducer: {
        habits: habitsReducer
    },
})

// This line of code extracts the state type
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; // TypeScript will help us to identify correct type of dispatch that also matches with action.  // This line of code extracts the dispatch type


export default store;