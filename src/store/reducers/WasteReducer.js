import {
    FETCH_AVAILABLE_FAILURE,
    FETCH_AVAILABLE_LOADING,
    FETCH_AVAILABLE_SUCCESS,
    FETCH_PICKUP_FAILURE,
    FETCH_PICKUP_LOADING,
    FETCH_PICKUP_SUCCESS
} from '../actions/index.js'


const initalState ={
    wasteData : [],
    currentPost : null,
    error: null,
    isFetching: false
};

function WasteReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_AVAILABLE_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_AVAILABLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                wasteData: action.payload
            }
        case FETCH_AVAILABLE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case FETCH_PICKUP_LOADING:
            return {
                isFetching: true,
            }
        case FETCH_PICKUP_SUCCESS:
            return {
                isFetching: false,
                wasteData: action.payload
            }
        case FETCH_PICKUP_FAILURE:
            return {
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default WasteReducer;