import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js';
import AvailableReducer from './AvailableReducer.js';
import PickupReducer from './PickupReducer.js';
import CompletedReducer from './CompletedReducer.js'
import CanceledReducer from './CanceledReducer.js'
import AvailByIdReducer from './AvailByIdReducer.js';

const rootReducer = combineReducers({
    users: UserReducer,
    available:  AvailableReducer,
    availbyid: AvailByIdReducer,
    pickup: PickupReducer,
    completed: CompletedReducer,

});

export default rootReducer;