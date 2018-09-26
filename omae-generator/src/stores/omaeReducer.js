import _ from 'lodash';
import { combineReducers } from "redux";
import { selectCharacter, SELECT_CHARACTER, ADD_NEW_CHARACTER } from "../actions/actions.js";

const selectCharacterReducer = (previousState = 0, action) => {
    if (!action || !action.payload || !action.payload.selectedCharacterId)
        return previousState;

    switch(action.type) {
        case SELECT_CHARACTER:
            return action.payload.selectedCharacterId;
            break;
        default:
            return previousState
            break;
    }
};

const characterReducer = (previousState = [], action) => {
    if (!action || !action.type)
        return previousState;

    switch(action.type) {
        case ADD_NEW_CHARACTER:
            let newCharacter = {
                id: previousState.length+1,
                name: "",
                stats: {
                    body: { value: 1, abbreviation: "BOD" },
                    agility: { value: 1, abbreviation: "AGI" },
                    strength: { value: 1, abbreviation: "STR" },
                    intuition: { value: 1, abbreviation: "INT" },
                    willpower: { value: 1, abbreviation: "WIL" },
                    logic: { value: 1, abbreviation: "LOG" },
                    charisma: { value: 1, abbreviation: "CHA" },
                    edge: { value: 1, abbreviation: "EDG" },
                    essence: { value: 5, abbreviation: "ESS" },
                    magic: { value: 0, abbreviation: "MAG" }
                }
            };
            return [...previousState, newCharacter];
            break;
        default:
            return previousState;
            break;
    }
}

const OmaeReducer = combineReducers({
    selectedCharacter: selectCharacterReducer,
    characters: characterReducer
});

export default OmaeReducer;