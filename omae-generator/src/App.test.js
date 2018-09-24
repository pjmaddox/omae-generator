import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CharacterSelectContainer from "./components/containers/CharacterSelectContainer.js";
import { createStore } from "redux";
import omaeReducer from "./stores/omaeReducer.js";
import Provider from 'react-redux/lib/components/Provider';
import CharacterSelect from './components/CharacterSelect';

configure({ adapter: new Adapter() });
const fakeStore = createStore(omaeReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={fakeStore}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it("should render a characterSelect element", () => {
//   let shallowNode = shallow(<Provider store={fakeStore}><App /></Provider>);
//   let result = shallowNode.find(".characterSelectContainer");
//   expect(result.length).toEqual(1);
// });