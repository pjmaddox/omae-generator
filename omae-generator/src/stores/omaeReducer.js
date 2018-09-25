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
                name: "",
                stats: {
                    body: { value: 1, abbreviaton: "BOD" },
                    agility: { value: 1, abbreviaton: "AGI" },
                    strength: { value: 1, abbreviaton: "STR" },
                    intuition: { value: 1, abbreviaton: "INT" },
                    willpower: { value: 1, abbreviaton: "WIL" },
                    logic: { value: 1, abbreviaton: "LOG" },
                    charisma: { value: 1, abbreviaton: "CHA" },
                    edge: { value: 1, abbreviaton: "EDG" },
                    essence: { value: 5, abbreviaton: "ESS" },
                    magic: { value: 0, abbreviation: "MAG" }
                }
            };
            console.log([...previousState, newCharacter]);
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