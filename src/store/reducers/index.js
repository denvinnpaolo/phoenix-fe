import { combineReducers }  from 'redux';
import UserReducer  from './UserReducer.js';
import AvailableReducer from './AvailableReducer.js';
import PickupReducer from './PickupReducer.js';
import CompletedReducer from './CompletedReducer.js'
import CanceledReducer from './CanceledReducer.js'
import AvailByIdReducer from './AvailByIdReducer.js';
import ViewReducer from './ViewReducer.js'

const rootReducer = combineReducers({
    users: UserReducer,
    available:  AvailableReducer,
    availbyid: AvailByIdReducer,
    canceled: CanceledReducer,
    pickup: PickupReducer,
    completed: CompletedReducer,
    view: ViewReducer

});

// let defaultState = null;
// export default (state, action) => {
//   switch (action.type) {
//     case UNFETCH_USER_SUCCESS:
//       // detaching the reference on reset
//       console.log(state)
//       state = {
//           users: {
//             userData: {},
//             loggedIn: false,
//             error: null,
//             isFetching: false

//           },
//           available: {},
//           availbyid: {},
//           canceled: {
//             canceledData : {},
//             newCanceled:{},
//             error: null,
//             isFetching: false
//           },
//           pickup: {},
//           completed: {
//             completedData : {},
//             newCompleted:{},
//             error: null,
//             isFetching: false
//           }
//       }
//       return state;
//     default:
//       break;
//   }
//   return rootReducer(state, action);
// };

export default rootReducer;