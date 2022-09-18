import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { getAllCharacters, getCharactersByName } from "../service";
import { ICharacter } from "../types/cards"

export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
    page: number;
    searchName: string;
}

const initialState:CharacterState = {
    characters: [],
    loading: false,
    page: 0,
    searchName: "",
};

export const loadAllCharacters = createThunk<ICharacter[], void> (
    "characters/LoadAllCharacters",
    async (_,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page } = state.characters;
        return getAllCharacters({page:page.toString()})
    }
) 

export const loadCharacterByName = createThunk< ICharacter[], string>(
    "character/LoadCharacterByName",
    async (nameToSearch,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page }= state.characters;
        return getCharactersByName({page: page.toString()}, nameToSearch);
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
        builder.addCase(loadAllCharacters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadAllCharacters.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
        builder.addCase(loadCharacterByName.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadCharacterByName.fulfilled, (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        });
        builder.addCase(loadCharacterByName.rejected, (state) => {
            state.characters = [];
            state.loading = false;
        });
    },
});