import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { getCharacters } from "../service";
import { ICharacter } from "../types/cards"

export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
    page: number;
}

const initialState:CharacterState = {
    characters: [],
    loading: false,
    page: 1,
};


export const loadCharacters = createThunk< ICharacter[], string>(
    "character/LoadCharacterByName",
    async (nameToSearch,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page }= state.characters;
        return getCharacters( page.toString(), nameToSearch);
    }
)

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        nextPage: (state) => {
            state.page +=1;
        },
        prevPage: (state) => {
            state.page -=1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadCharacters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
        builder.addCase(loadCharacters.rejected, (state) => {
            state.characters = [];
            state.loading = false;
        });
    },
});