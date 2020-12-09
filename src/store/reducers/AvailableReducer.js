import {
    FETCH_AVAILABLE_FAILURE,
    FETCH_AVAILABLE_LOADING,
    FETCH_AVAILABLE_SUCCESS,
    FETCH_MULTIAVAIL_FAILURE,
    FETCH_MULTIAVAIL_SUCCESS,
    FETCH_MULTIAVAIL_LOADING
} from '../actions/index.js'


const initalState ={
    availableData : {},
    multiIdData : {},
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
        case FETCH_MULTIAVAIL_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_MULTIAVAIL_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case FETCH_MULTIAVAIL_SUCCESS:
            return {
                ...state,
                multiIdData: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default AvailableReducer;