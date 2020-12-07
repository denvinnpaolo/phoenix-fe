import {
    FETCH_PICKUP_FAILURE,
    FETCH_PICKUP_LOADING,
    FETCH_PICKUP_SUCCESS
} from '../actions/index.js';

const initalState ={
    pickupData : {},
    error: null,
    isFetching: false
};


function PickupReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_PICKUP_LOADING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_PICKUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pickupData: action.payload,
            }
        case FETCH_PICKUP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default PickupReducer;