import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleAttributeDisplay from "../components/SingleAttributeDisplay.js";

configure({adapter: new Adapter()});

describe("single attribute display render", () => {
    let mockIncrementFunction, mockDecrementFunction;
    beforeEach(() => {

    });

    it("should render a label with the attribute name on it",() => {

    });

    it("should render a textbox with the current attribute value in it",() => {

    });

    it("should render an increment button",() => {

    });

    it("should render an decrement button",() => {

    });

    it("should call the increment function when you click the increment button",() => {

    });

    it("should call the decrement function when you click the decrement button",() => {

    });
});