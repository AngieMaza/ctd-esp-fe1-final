import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { getCharacters, getCharactersFavorites } from "../service";
import { ICharacter } from "../types/types"
import { CharacterState } from "../types/types";

const initialState: CharacterState = {
    characters: [],
    loading: false,
    page: 1,
    name: "",
    detail:{
        id: 0,
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
    favoritesId: [],
    favorites:[],
};

export const loadCharacters = createThunk< ICharacter[], string>(
    "character/LoadCharacters",
    async (_,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { page, name }= state.characters;
        return getCharacters( page.toString(), name);
    }
);

export const loadCharactersFavorites = createThunk< ICharacter[], number[]>(
    "character/LoadCharactersFavorites",
    async (_,thunkAPI) =>{
        const state = thunkAPI.getState();
        const { favoritesId } = state.characters;
        return getCharactersFavorites(favoritesId);
    }
);

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
            state.favoritesId.push(action.payload);
        }, 
        deleteFavorite : (state, action) => {
            state.favoritesId = state.favoritesId.filter((id) => id !== action.payload)
        },
        deleteAllFavorites : (state) => {
            state.favoritesId = [];
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
        builder.addCase(loadCharactersFavorites.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadCharactersFavorites.fulfilled, (state, action) => {
            state.favorites = action.payload;
            state.loading = false;
        });
        builder.addCase(loadCharactersFavorites.rejected, (state) => {
            state.favorites = [];
            state.loading = false;
        });

    },
});