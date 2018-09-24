import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CharacterSelect from "../components/CharacterSelect.js";
import CharacterTab from "../components/characterTab";

configure({adapter: new Adapter()});

describe("characterSelect", () => {
    let shallowNode, characters, mockOnClickFunction, expectedResultTabs;
    beforeEach(() => {
        characters = [
            { id: 121, name: "steve", isSelected: false},
            { id: 122, name: "olinhansonson", isSelected: false},
            { id: 123, name: "jaeger", isSelected: true}
        ];
        mockOnClickFunction = jest.fn();
        expectedResultTabs = [
            <CharacterTab id={characters[0].id} name={characters[0].name} isSelected={characters[0].isSelected} onClick={mockOnClickFunction}/>,
            <CharacterTab id={characters[1].id} name={characters[1].name} isSelected={characters[1].isSelected} onClick={mockOnClickFunction}/>,
            <CharacterTab id={characters[2].id} name={characters[2].name} isSelected={characters[2].isSelected} onClick={mockOnClickFunction}/>
        ];
        shallowNode = shallow(<CharacterSelect chars={characters} onTabClick={mockOnClickFunction} />);
    });
    it("should render a div with class 'characterSelectContainer'", () => {
        let result = shallowNode.find('div.characterSelectContainer');
        expect(result.length).toEqual(1);
    });
    it("should render a CharacterTab for each character in the list", () => {
        let result = shallowNode.find("CharacterTab");
        expect(result.length).toEqual(characters.length);
    });
    it("should render a CharacterTab with the name of the character in it", () => {
        let result = shallowNode.find("CharacterTab").first();
        expect(result.props().name).toEqual(characters[0].name);
    });
    it("should render a CharacterTab with the id of the character in it", () => {
        let result = shallowNode.find("CharacterTab").first();
        expect(result.props().id).toEqual(characters[0].id);
    });
    it("should render a CharacterTab with the onclick callback passed to uit", () => {
        let result = shallowNode.find("CharacterTab").first();
        expect(result.props().onTabClick).toEqual(mockOnClickFunction.fn);
    });
});