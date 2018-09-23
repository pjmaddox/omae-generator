import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CharacterSelectContainer from "./components/containers/CharacterSelectContainer.js";

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render a characterSelectContainer element", () => {
  let shallowNode = shallow(<App />);
  let result = shallowNode.find('CharacterSelectContainer');
  expect(result.length).toEqual(1);
});