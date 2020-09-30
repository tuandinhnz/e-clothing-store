import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { shopDataReducer } from './shopReducer';
import { userReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { directoryReducer } from './directoryReducer';
// the import below tell redux-persist that we want to use the local storage of the window object of the browser. We can also use the session storage if we want by importing the sessionstorage
import storage from 'redux-persist/lib/storage';

//define a persist config, a JSON object represent configuration that we want Redux Persist to use

const persistConfig = {
  key: 'root',
  storage,
  // the whitelist contains the state that we want to persist. In thid case we only want to persist the cart as the user has been stored on the Firestore so there is no need to store the users locally
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
