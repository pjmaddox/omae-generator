import { shallown, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import omaeReducer from "../stores/omaeReducer.js";
import { SELECT_CHARACTER, ADD_NEW_CHARACTER } from "../actions/actions";
import OmaeReducer from "../stores/omaeReducer.js";

configure({adapter: new Adapter()});

describe("characterSelect reducer", () => {
    let fakeAction, fakePreviousState, expectedId;
    beforeEach(() => {
        expectedId = 500;
        fakePreviousState = {
            selectedCharacter: expectedId,
            characters: []
        };
        fakeAction = {
            type: SELECT_CHARACTER,
            payload: { selectedCharacterId: expectedId }
        };
    });
    it("should return previous state when no valud action", () => {
        let result = omaeReducer(fakePreviousState, null);
        expect(result).toEqual(fakePreviousState);
    });
    it("should return selectedCharacter as payload target", () => {
        let result = omaeReducer(fakePreviousState, fakeAction);
        expect(result).toEqual(fakePreviousState);
    });

});


describe("characters reducer", () => {
    it("should return previous state when no action is given", () => {
        let fakePreviousState = {
            selectedCharacter: 200,
            characters: [ { name: "Stroodle", id: 9122} ]
        };
        let result = omaeReducer(fakePreviousState, null);
        expect(result).toEqual(fakePreviousState);
    });

    it("should return previous state when no valid actionType is given", () => {
        let fakePreviousState = {
            selectedCharacter: 200,
            characters: [ { name: "Stroodle", id: 9122} ]
        };
        let fakeAction = { type: "KEBAB", payload: {  } };
        let result = omaeReducer(fakePreviousState, fakeAction);
        expect(result).toEqual(fakePreviousState);
    });

    describe("ADD_NEW_CHARACTER", () => {
        let fakePreviousState, fakeAction;
        beforeEach(() => {
            fakePreviousState = {
                selectedCharacter: 222,
                characters: [
                    { id: 222, name: "some guy named john", stats: {  } },
                    { id: 223, name: "some guy named john2", stats: {  } }
                ]
            };
            fakeAction = {
                type: ADD_NEW_CHARACTER,
                payload: {  }
            };
        });
        it("should add a new character to the list", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            expect(result.characters.length).toEqual(fakePreviousState.characters.length+1);
        });
        it("should set the name of the character to the empty string", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newChar = result.characters[result.characters.length-1];
            expect(newChar.name).toEqual("");
        });
        it("should add a 'stats' object to the character", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newChar = result.characters[result.characters.length-1];
            expect(newChar.stats).not.toBeNull();
        });
        it("should create a body object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.body).not.toBeNull();
            expect(newCharStats.body.value).toEqual(1);
            expect(newCharStats.body.abbreviation).toEqual("BOD");
        });
        it("should create a agility object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.agility).not.toBeNull();
            expect(newCharStats.agility.value).toEqual(1);
            expect(newCharStats.agility.abbreviation).toEqual("AGI");
        });
        it("should create a strength object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.strength).not.toBeNull();
            expect(newCharStats.strength.value).toEqual(1);
            expect(newCharStats.strength.abbreviation).toEqual("STR");
        });
        it("should create a intuition object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.intuition).not.toBeNull();
            expect(newCharStats.intuition.value).toEqual(1);
            expect(newCharStats.intuition.abbreviation).toEqual("INT");
        });
        it("should create a willpower object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.willpower).not.toBeNull();
            expect(newCharStats.willpower.value).toEqual(1);
            expect(newCharStats.willpower.abbreviation).toEqual("WIL");
        });
        it("should create a logic object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.logic).not.toBeNull();
            expect(newCharStats.logic.value).toEqual(1);
            expect(newCharStats.logic.abbreviation).toEqual("LOG");
        });
        it("should create a charisma object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.charisma).not.toBeNull();
            expect(newCharStats.charisma.value).toEqual(1);
            expect(newCharStats.charisma.abbreviation).toEqual("CHA");
        });
        it("should create a edge object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.edge).not.toBeNull();
            expect(newCharStats.edge.value).toEqual(1);
            expect(newCharStats.edge.abbreviation).toEqual("EDG");
        });
        it("should create a magic object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.magic).not.toBeNull();
            expect(newCharStats.magic.value).toEqual(0);
            expect(newCharStats.magic.abbreviation).toEqual("MAG");
        });
        it("should create a essence object within the stats object with value set to 1 and abbreviation attributes", () => {
            let result = omaeReducer(fakePreviousState, fakeAction);
            let newCharStats = result.characters[result.characters.length-1].stats;
            expect(newCharStats.essence).not.toBeNull();
            expect(newCharStats.essence.value).toEqual(5);
            expect(newCharStats.essence.abbreviation).toEqual("ESS");
        });
        it("should assign a guid as an id to the character", () => {
            
        });
        it("should assign baseline maximums to each stats for the character", () => {
            
        });
    });
});