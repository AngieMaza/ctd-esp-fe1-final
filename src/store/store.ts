import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chapterSlice } from "../slices/sliceChapters";
import { charactersSlice } from "../slices/slicePersonajes";

const rootReducer = combineReducers({
  characters: charactersSlice.reducer,
  chapters: chapterSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
