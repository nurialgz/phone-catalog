import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

import PhoneListContainer from './containers/PhoneListContainer.js';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component{
    render() {
        return (
            <PhoneListContainer />
        )
    }
}

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
