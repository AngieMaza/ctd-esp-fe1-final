import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import { characterReducer } from "../reducer";

const rootReducer = combineReducers({
    characters: characterReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;