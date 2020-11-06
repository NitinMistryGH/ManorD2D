import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { installAPIMocks } from './api/mocks/install-mocks';
import MockAdapter from 'axios-mock-adapter';

if (window.CONFIG.mocksEnabled) {
    installAPIMocks(new MockAdapter(axios))
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),

);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);