import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const createThunk = <ReturnValue , ArgType> ( 
    typePrefix : string, 
    fn: AsyncThunkPayloadCreator<
    ReturnValue, 
    ArgType, {
        dispatch: AppDispatch;
        state:RootState;
    }>
    ) => createAsyncThunk (typePrefix, fn);