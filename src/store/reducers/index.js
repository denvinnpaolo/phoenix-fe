import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js';
import AvailableReducer from './AvailableReducer.js';
import PickupReducer from './PickupReducer.js';
import CompletedReducer from './CompletedReducer.js'
import CanceledReducer from './CanceledReducer.js'

const rootReducer = combineReducers({
    users: UserReducer,
    available:  AvailableReducer,
    pickup: PickupReducer,
    completed: CompletedReducer,
    canceled: CanceledReducer

});

export default rootReducer;