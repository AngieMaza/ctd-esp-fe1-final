import { createSlice } from "@reduxjs/toolkit";
import { createThunk } from "../Hooks";
import { ChapterState } from "../types/types";
import { getCapitulos } from "../service";
import { IChapter } from "../types/types";

const initialState: ChapterState = {
    chapters: [],
    loading: false,
}

export const loadChapters = createThunk <IChapter[], string> (
    "chapters/loadChapters",
    async (cadenaDeIds, thunkAPI) => {
        return getCapitulos(cadenaDeIds);
    }
) 

export const chapterSlice = createSlice({
    name: "chapters",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(loadChapters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loadChapters.fulfilled, (state,action) => {
            state.loading = false;
            state.chapters = action.payload;
        });
        builder.addCase(loadChapters.rejected, (state) => {
            state.loading = false;
            state.chapters = [];
        });
        
    }
})