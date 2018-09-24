//Constants
export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const ADD_EXISTING_CHARACTER = "ADD_EXISTING_CHARACTER";

//ActionCreators
export const selectCharacter = (characterId) => {
    return {
        type: SELECT_CHARACTER,
        payload: {
            selectedCharacterId: characterId
        }
    };
};

export const addExistingCharacter = (characterIdToAdd) => {
    return {
        type: ADD_EXISTING_CHARACTER,
        payload: {
            characterId: characterIdToAdd
        }
    };
};