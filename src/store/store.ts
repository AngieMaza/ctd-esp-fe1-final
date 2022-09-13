import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "../slices/slices";

const rootReducer = combineReducers({
  characters: charactersSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
