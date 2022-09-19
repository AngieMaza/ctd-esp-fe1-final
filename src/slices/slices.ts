import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { getCharacters } from "../service";
import { ICharacter } from "../types/cards"

export type CharacterState= {
    characters: ICharacter[];
    loading: boolean;
    page: number;
    name: string;
    detail: ICharacter;
    favorites: ICharacter[];
}

const initialState: CharacterState ={
    characters: [],
    loading: false,
    page: 1,
    name: "",
    detail:{
        id: null,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin:{
          name: "",
          url: "",
        },
        location:{
          name: "",
          url: "",
        },
        image: "",
        episode: [],
        url: "",
      },
    favorites:[],
};

export const loadCharacters = createThunk< ICharacter[], string>(
    "character/LoadCharacters",
    async (_,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page, name }= state.characters;
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
        },
        nameToFilter: (state, action) =>{
            state.name = action.payload;
        },
        cleanFilter: (state) => {
            state.name = "";
            state.page = 1;
        },
        onDetail : (state, action) => {
            state.detail = action.payload;
        },
        addFavorites : (state, action) => {
            state.favorites = action.payload;
        },
        deleteFavorites : (state, action) => {
            state.favorites.filter((favorite) => favorite.id !== action.payload); 
        },
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