import React from 'react';
import ReactDOM from 'react-dom';
import PhoneListContainer from './PhoneListContainer.js';
import PhoneList from '../components/PhoneList';
import '../setupTest.js';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';

let store = createStore(reducers, applyMiddleware(thunk));

import { shallow, mount, render } from 'enzyme';

// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<PhoneListContainer store={store} />, div);
//     // ReactDOM.render(<Provider store={store} ><PhoneListContainer /></Provider>, div);
//     ReactDOM.unmountComponentAtNode(div);
// });

// it('renders welcome message', () => {
//     const wrapper = shallow(<Welcome name="Nuria" />);
//     const welcome =<h1>Bienvenido al itinerario, Nuria</h1>;
//     expect(wrapper.contains(welcome)).toEqual(true);
// });