import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleAttributeDisplay from "../components/SingleAttributeDisplay.js";

configure({adapter: new Adapter()});

describe("single attribute display render", () => {
    let shallowNode, mockIncrementFunction, mockDecrementFunction, expectedAttributeValue, expectedAttributeAbbreviation;
    beforeEach(() => {
        mockIncrementFunction = jest.fn();
        mockDecrementFunction = jest.fn();
        expectedAttributeAbbreviation = "ESS";
        expectedAttributeValue = 4;
        shallowNode = shallow(<SingleAttributeDisplay onIncrementClick={mockIncrementFunction} onDecrementClick={mockDecrementFunction} attributeAbbreviation={expectedAttributeAbbreviation} attributeValue={expectedAttributeValue}/>);
    });

    it("should render a label with the attribute name on it",() => {
        let result = shallowNode.find("label").text();
        expect(result).toEqual(expectedAttributeAbbreviation);
    });

    it("should render a textbox with the current attribute value in it",() => {
        let result = shallowNode.find("input").props().value;
        expect(result).toEqual(expectedAttributeValue);
    });

    it("should render an increment button",() => {
        let result = shallowNode.find("button.incrementButton");
        expect(result).not.toBeNull();
    });

    it("should render an decrement button",() => {
        let result = shallowNode.find("button.decrementButton");
        expect(result).not.toBeNull();
    });

    it("should call the increment function when you click the increment button",() => {
        let target = shallowNode.find(".incrementButton");
        target.simulate("click");
        expect(mockIncrementFunction.mock.calls.length).toEqual(1);
    });

    it("should call the decrement function when you click the decrement button",() => {
        let target = shallowNode.find('.decrementButton');
        target.simulate('click');
        expect(mockDecrementFunction.mock.calls.length).toEqual(1);
    });
});