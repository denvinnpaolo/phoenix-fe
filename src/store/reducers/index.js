import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js'
import WasteReducer from './WasteReducer.js'

const rootReducer = combineReducers({
    users: UserReducer,
    waste:  WasteReducer

});

export default rootReducer;