import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICharacter} from "../types/cards";
import { ThunkAction} from "redux-thunk";
import { IRootState } from "../store/store";
import { getCharactersByName } from "../service";

export interface LoadAllCharactersAction extends Action {
    type: "LOAD_ALL_CHARACTERS";
    characters : ICharacter[];
};
export const LoadAllCharacters: ActionCreator<LoadAllCharactersAction> = (characters : ICharacter[]) => {
    return {
        type: "LOAD_ALL_CHARACTERS",
        characters
    };
};
export interface SearchCharacterAction extends Action {
    type: "SEARCH_CHARACTER";
    name: string;
}

export interface SearchCharactersSuccessAction extends Action {
    type: "SEARCH_CHARACTERS_SUCCESS";
    characters : ICharacter[];
}
export interface SearchCharactersErrorAction extends Action {
    type: "SEARCH_CHARACTERS_ERROR";
    error: string;
}
export type CharacterAction = SearchCharacterAction | SearchCharactersSuccessAction| SearchCharactersErrorAction ;

interface SearchCharactersThunkAction extends ThunkAction <void , IRootState ,unknown, CharacterAction>{};

const searchCharacters: ActionCreator<SearchCharacterAction> = (name: string) => {
    return {
        type: "SEARCH_CHARACTER",
        name: name
    }
}
const searchCharactersSuccess: ActionCreator<SearchCharactersSuccessAction> = (characters: ICharacter[]) => {
    return {
        type: "SEARCH_CHARACTERS_SUCCESS",
        characters: characters,
    }
}

const searchCharactersError: ActionCreator<SearchCharactersErrorAction> = (error: string) => {
    return {
        type: "SEARCH_CHARACTERS_ERROR",
        error: error
    }
}
const MINIMUM_SEARCH_CHARACTERS = 3;
export const searchCharactersThunk = (name: string): SearchCharactersThunkAction  => {
    return async (dispatch, getState) => {
        if (name.length < MINIMUM_SEARCH_CHARACTERS) return null;
        dispatch(searchCharacters(name));
        try {
            const characters = await getCharactersByName(name);
            dispatch(searchCharactersSuccess(characters));
        } catch (error) {
            dispatch(searchCharactersError(error));
        }
    }
}



