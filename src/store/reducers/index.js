import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js';
import AvailableReducer from './AvailableReducer.js';
import PickupReducer from './PickupReducer.js';
import CompletedReducer from './CompletedReducer.js'
import CanceledReducer from './CanceledReducer.js'
import AvailByIdReducer from './AvailByIdReducer.js';
import ViewReducer from './ViewReducer.js'
import ArchiveReducer from './ArchiveReducer.js'
import { UNFETCH_USER_SUCCESS } from '../actions/index.js';

const combineReducer = combineReducers({

    archive: ArchiveReducer,
    available:  AvailableReducer,
    availbyid: AvailByIdReducer,
    canceled: CanceledReducer,
    completed: CompletedReducer,
    pickup: PickupReducer,
    users: UserReducer,
    view: ViewReducer

});

const rootReducer = (state, action) => {
    if(action.type === UNFETCH_USER_SUCCESS){
        state = undefined
    }

    return combineReducer(state, action)

}

export default rootReducer;