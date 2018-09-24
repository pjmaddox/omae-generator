import _ from 'lodash';
import { combineReducers } from "redux";
import { selectCharacter, SELECT_CHARACTER } from "../actions/actions.js";

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
    if (!action || !action.type || !action.type.payload || !action.type.payload.characterId)
        reutrn previousState;
        
    switch(action.type) {

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