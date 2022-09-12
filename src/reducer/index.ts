import { Reducer } from "redux";
import { CharacterAction } from "../actions";
import { ICharacter } from "../types/cards";

export interface CharacterState {
  search: string;
  characters: ICharacter[];
  error: string | null;
  status: "LOADING" | "COMPLETED" | "COMPLETED_WITH_ERROR";
}

const initialState: CharacterState = {
  search: "",
  characters: [],
  error: null,
  status: "COMPLETED",
};

export const characterReducer: Reducer<CharacterState, CharacterAction> = (
  state = initialState,
  action
): CharacterState => {
  switch (action.type) {
    case "SEARCH_CHARACTER": {
      return {
        ...state,
        search: action.name,
        status: "LOADING",
        error:null
      };
    }
    case "SEARCH_CHARACTERS_SUCCESS": {
      return {
        ...state,
        characters: action.characters,
        status: "COMPLETED",
      };
    }
    case "SEARCH_CHARACTERS_ERROR": {
      return {
        ...state,
        status: "COMPLETED_WITH_ERROR",
        characters: [],
        error: action.error,
      };
    }
    default:
      return state;
  }
};
