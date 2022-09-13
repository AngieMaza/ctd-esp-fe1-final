import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCharacters } from "../service";
import { ICharacter } from "../types/cards"

export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
}

const initialState:CharacterState = {
    characters: [],
    loading: false,
};
const timeout = (ms: number) =>
    new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, ms);
        });

export const loadAllCharacters = createAsyncThunk( "characters/fetchAllCharacters", async () =>{
    await timeout(2000);
    return getAllCharacters();
})

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadAllCharacters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadAllCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
    },
});