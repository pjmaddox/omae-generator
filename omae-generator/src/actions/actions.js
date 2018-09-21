//Constants
export const SELECT_CHARACTER = "SELECT_CHARACTER";

//ActionCreators
export const selectCharacter = (characterId) => {
    return {
        type: SELECT_CHARACTER,
        payload: {
            selectedCharacterId: characterId
        }
    };
};