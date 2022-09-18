import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { getCharacters } from "../service";
import { ICharacter } from "../types/cards"

export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
    page: number;
    name: string;
}

const initialState:CharacterState = {
    characters: [],
    loading: false,
    page: 1,
    name: "",
};


export const loadCharacters = createThunk< ICharacter[], string>(
    "character/LoadCharacterByName",
    async (nameToSearch,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page, name }= state.characters;
        state.characters.name = nameToSearch;
        return getCharacters( page.toString(), name);
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