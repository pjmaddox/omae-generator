import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SELECT_CHARACTER, selectCharacter, addExistingCharacter, ADD_EXISTING_CHARACTER, ADD_NEW_CHARACTER, addNewCharacter } from "../actions/actions.js";

configure({adapter: new Adapter()});

describe("selectCharacter", () => {
    it("should return an object with the type SELECT_CHARACTER", () => {
        let expectedCharacterId = 5;
        let result = selectCharacter(expectedCharacterId);
        expect(result.type).toEqual(SELECT_CHARACTER);
    });
    it("should return an object with payload=>selectedCharacterId equalt ot the expectedCharacterId", () => {
        let expectedCharacterId = 5;
        let result = selectCharacter(expectedCharacterId);
        expect(result.payload.selectedCharacterId).toEqual(expectedCharacterId);
    });
});

describe("addExistingCharacter", () => {
    it("should return an object with the type ADD_EXISTING_CHARACTER", () => {
        let expectedCharacterId = 5;
        let result = addExistingCharacter(expectedCharacterId);
        expect(result.type).toEqual(ADD_EXISTING_CHARACTER);
    });
    it("should return an object with payload=>characterId equal to the expectedCharacterId", () => {
        let expectedCharacterId = 500;
        let result = addExistingCharacter(expectedCharacterId);
        expect(result.payload.characterId).toEqual(expectedCharacterId);
    });
});

describe("addNewCharacter", () => {
    it("should return an object with the type ADD_NEW_CHARACTER", () => {
        let result = addNewCharacter();
        expect(result.type).toEqual(ADD_NEW_CHARACTER);
    });
    it("should return an object with an empty payload", () => {
        let result = addNewCharacter();
        expect(result.payload).toEqual({});
    });
});