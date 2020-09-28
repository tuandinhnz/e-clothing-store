import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';

import App from './App';
import reducers from './reducers/reducers';
// Middlewares setup. Thunk and Sagas
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// Redux Devtools setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

//we pass individual saga into run method

sagaMiddleware.run(rootSaga);

//Persist setup
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
