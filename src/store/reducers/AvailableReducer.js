import {
    FETCH_AVAILABLE_FAILURE,
    FETCH_AVAILABLE_LOADING,
    FETCH_AVAILABLE_SUCCESS,
} from '../actions/index.js'


const initalState ={
    availableData : [],
    error: null,
    isFetching: false
};

function AvailableReducer(state = initalState, action) {
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
                availableData: action.payload
            }
        case FETCH_AVAILABLE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default AvailableReducer;