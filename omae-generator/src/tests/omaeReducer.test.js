import { shallown, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import omaeReducer from "../stores/omaeReducer.js";
import { SELECT_CHARACTER } from "../actions/actions";

configure({adapter: new Adapter()});

describe("characterSelect reducer", () => {
    let fakeAction, fakePreviousState;
    beforeEach(() => {
        fakePreviousState = {
            selectedCharacter: 1
        };
        fakeAction = {
            type: SELECT_CHARACTER,
            payload: { selectedCharacterId: 100 }
        };
    });
    it("should return 0 when called with no previous state", () => {
        let expectedState = {
            selectedCharacter: 0
        };
        let result = omaeReducer(fakePreviousState, null);
        expect(result).toEqual(fakePreviousState);
    });
});