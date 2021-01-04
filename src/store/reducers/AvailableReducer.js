import {
    FETCH_AVAILABLE_FAILURE,
    FETCH_AVAILABLE_LOADING,
    FETCH_AVAILABLE_SUCCESS,
    FETCH_MULTIAVAIL_FAILURE,
    FETCH_MULTIAVAIL_SUCCESS,
    FETCH_MULTIAVAIL_LOADING,
    CREATE_NEWWASTE_FAILURE,
    CREATE_NEWWASTE_START,
    CREATE_NEWWASTE_SUCCESS,
    UNFETCH_USER_SUCCESS
} from '../actions/index.js'


const initalState ={
    availableData : {},
    newAvail : {},
    multiIdData : {},
    error: null,
    isFetching: false
};

function AvailableReducer(state = initalState, action) {
    switch(action.type) {
        case UNFETCH_USER_SUCCESS:
            return initalState
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
        case CREATE_NEWWASTE_START:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_NEWWASTE_SUCCESS:
            return {
                ...state, 
                newAvail: action.payload,
                isFetching: false
            }
        case CREATE_NEWWASTE_FAILURE:
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