import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SELECT_CHARACTER, selectCharacter } from "../actions/actions.js";

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