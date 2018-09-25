//Constants
export const SELECT_CHARACTER = "SELECT_CHARACTER";
export const ADD_EXISTING_CHARACTER = "ADD_EXISTING_CHARACTER";
export const ADD_NEW_CHARACTER = "ADD_NEW_CHARACTER";

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

export const addNewCharacter = () => {
    return {
        type: ADD_NEW_CHARACTER,
        payload: {
            
        }
    };
};