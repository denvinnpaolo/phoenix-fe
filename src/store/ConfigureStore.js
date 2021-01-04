import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from './reducers/index.js'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = composeEnhancer(applyMiddleware(thunk, logger));
 
export default () => {
  let store = createStore(persistedReducer,middleware)
  let persistor = persistStore(store)
  return { store, persistor }
}