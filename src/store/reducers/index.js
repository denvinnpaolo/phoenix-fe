import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js'

const rootReducer = combineReducers({
    users: UserReducer

});

export default rootReducer;