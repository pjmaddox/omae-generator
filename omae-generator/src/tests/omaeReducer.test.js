import { shallown, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import omaeReducer from "../stores/omaeReducer.js";
import { SELECT_CHARACTER } from "../actions/actions";

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
        let expectedState = {
            selectedCharacter: expectedId
        };
        let result = omaeReducer(fakePreviousState, fakeAction);
        expect(result).toEqual(expectedState);
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

    it("should ", () => {

    });
});